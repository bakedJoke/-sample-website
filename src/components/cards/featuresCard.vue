<template>
    <div class="container p-5 mt-2" >
    <div class="row featurette align-items-center" :class="class">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">{{ featuresTitle }}</h2>
        <p class="lead">{{ featuresDescription }}</p>
      </div>
      <div class="col-md-5">
        <img :src="featuresImg" alt="" class="img-fluid mx-auto w-100">
      </div>
    </div>
</div>
</template>
<script setup>
defineProps({
    class:{type:String, default:""},
    featuresTitle:{type:String},
    featuresDescription:{type:String},
    featuresImg:{type:String},
})
</script>
<style>

</style>