<template>
    <FormKit
        type="text"
        name="cardName"
        label="Name On Card"
        v-model="cardInfo.cardName"
        placeholder="John Doe"
        validation="required|length:3"
        :validation-messages="{
          required: 'Name is required',
          length: 'Name must be longer than 3 letters',
        }"
      />
      <FormKit
        type="text"
        name="cardNumber"
        label="Card Number"
        v-model="cardInfo.cardNumber"
        @keyup="handleCardNubmer"
        placeholder="XXXX XXXX XXXX XXXX"
        :validation="[['required'], ['matches', /^\d{4} \d{4} \d{4} \d{4}$/]]"
        :validation-messages="{
          matches: 'Card number must be formatted: XXXX XXXX XXXX XXXX',
        }"
      />
      <FormKit
        type="text"
        name="expireDate"
        label="Expire Date"
        v-model="cardInfo.cardExpire"
        @keyup="handleCardExpire"
        placeholder="MM / YY"
        :validation="[['required'],['matches',/^(0[1-9]|1[0-2])\/(20)\d{2}$/]]"
        :validation-messages="{
          matches:'expite date must be formatted XX/XX'  
        }"
      />
      <FormKit
        type="text"
        name="cvc"
        label="Cvc"
        v-model="cardInfo.cardCvc"
        @keyup="handleCvc"
        placeholder="XXX"
        validation="required"
        :validation-messages="{
          required: 'Cvc is required',
        }"
      />
</template>
<script setup lang="ts">
import {formatCardNumber,expireCard,formatCvc} from '@/core/helpers/creditCardFormatter'
import {type creditCard} from '@/models/payment'
const props = defineProps({
    cardInfo:{
        type : Object as () =>creditCard,
        default:{}
    }
})


const handleCardNubmer = (e: Event) => {
  const value = e.target.value;
  const newValue = formatCardNumber(value);
    props.cardInfo.cardNumber = newValue;
};
const handleCardExpire = (e: Event)=>{
    const value = e.target?.value;
    const newValue = expireCard(value);
    props.cardInfo.cardExpire = newValue;

};
const handleCvc=(e:Event)=>{
    const value = e.target?.value;
    const newValue = formatCvc(value);
    props.cardInfo.cardCvc = newValue;

}
</script>