<template>
    <Header/>
    <RouterView/>
    <Footer/>
</template>
<script setup lang="ts">
import  Header  from "@/layouts/Main-Layout/Header/header.vue"
import  Footer  from "@/layouts/Main-Layout/Footer/footer.vue"
import { RouterView } from 'vue-router';

</script>