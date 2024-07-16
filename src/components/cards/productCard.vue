<template>
    <div class="col-lg-4" :class="props.class">
        <img :src="props.img" alt="" width="140" height="140" class="rounded-circle">
        <h2 class="fw-normal">{{ props.title }}</h2>
        <p>{{ props.description }}</p>
        <p><a class="btn btn-secondary" @click="modal">View details »</a></p>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
class:{type:String, default:""},
img:{type:String},
title:{type:String},
description:{
    type:String
}
})

</script>