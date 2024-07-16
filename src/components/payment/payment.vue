<template>
        <FormKit
            label="Number"
            type="text"
            placeholder="Number"
            v-model="customerInfo.number"
            @keyup="handleCustomerNumber"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
                required: 'Number is required',
                length: 'Number  must be longer than 3 letters',
                matches: 'Phone number must be in the format xxx-xxx-xxxx',
            }"
        />
        <FormKit
            label="Username"
            type="text"
            v-model="customerInfo.username"
            placeholder="John Doe"
            validation="required|alpha|length:3"
            :validation-messages="{
                required: 'Name is required',
                length: 'Name must be longer than 3 letters',
            }"
        />
        <FormKit
            label="Email"
            type="email"
            v-model="customerInfo.email"
            placeholder="xxxxxxxxxx@xx.xxx"
            validation="required|length:5|email"
            :validation-messages="{
                required: 'email is required',
                length: 'Name must be longer than 3 letters',
            }"
        />
     
  
</template>
<script setup lang="ts">
import { formatCustomerNumber } from "@/core/helpers/creditCardFormatter";
import { useCounterStore } from "@/store/counter";
import { type Receiver } from "@/models/payment";
const store = useCounterStore()
const user=store.user

const props = defineProps({
    customerInfo:{
        type:Object as ()=> Receiver,
        default :{}
    }
})
const handleCustomerNumber = (e: Event)=>{
    const value = e.target?.value;
    const newValue = formatCustomerNumber(value);
    props.customerInfo.number = newValue;

};

</script>