<template>
    <div class="position-relative overflow-hidden p-3 p-md-5  text-center bg-body-tertiary">
        <div class="col-md-8 p-lg-5 mx-auto my-5">
        <h1 class="fw-bold">{{ title }}</h1>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title:{type:String}
})
</script>