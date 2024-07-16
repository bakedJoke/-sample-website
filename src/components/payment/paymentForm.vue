<template>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-5 col-12">
      <FormKit type="form" :actions="false" >
        <FormKit type="multi-step" tab-style="tab" >
          <FormKit type="step" name="personalInfo">
            <!-- component for example brevity. -->
            <partOne :customer-info="paymentInfo.receiverInfo" />
            <template #stepNext="{ handlers, node }">
              <FormKit
                type="button"
                @click="handlers.incrementStep(1)()"
                label="Next Step"
                data-next="true"
                outer-class="ms-auto"
                input-class="$remove:formkit-input btn btn-primary text-white rounded-1 px-5 py-2 fs-6"
              />
            </template>
          </FormKit>

          <FormKit type="step" name="references">
            <!-- component for example brevity. -->
            <partTwo :card-info="paymentInfo.creditCard"/>
            <template #stepNext="{ handlers, node }">
              <!-- incrementStep returns a callable function -->
              <FormKit
                type="button"
                @click="checkVerible()"


                label="Pay Now"
                data-next="true"
                input-class="$remove:formkit-input btn btn-success text-white rounded-1 px-5 py-2 fs-6"
              />
            </template>
          </FormKit>
        </FormKit>
      </FormKit>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import {type cardInfo} from "@/models/payment"
import partOne from "@/components/payment/payment.vue";
import partTwo from "@/components/payment/paymentTwo.vue";
import { useRouter } from 'vue-router';
import {appAxios} from '@/utils/axios'


import { inject, reactive} from "vue";
const Swal: any = inject("Swal");
const router = useRouter();
const paymentInfo = reactive<cardInfo>({
  receiverInfo:{
    username:"",
    email:"",
    number:""
  },
  creditCard:{
    cardName:"",
    cardNumber:"",
    cardExpire:"",
    cardCvc:""
  }
});

const checkVerible=()=>{
  if (!paymentInfo.creditCard.cardName.trim() || !paymentInfo.creditCard.cardNumber.trim() || !paymentInfo.creditCard.cardExpire.trim() || !paymentInfo.creditCard.cardCvc.trim()) {
   return Swal.fire({
      icon:"error",
      title:"Kredi kartı bilgilerini eksiksiz doldurun.",
      showComfirmButton:false,
      timer:1500
    })
  }
  return Swal.fire({
      icon:"success",
      title:"Ödeme Başarılı",
      showComfirmButton:false
    }).then((result:any)=>{
      if (result.isConfirmed) {
        appAxios.post('/userSubsciribe',paymentInfo).then(promise=>{
          console.log(promise);
        })
        router.push("/home");
      }
    })
}
</script>
