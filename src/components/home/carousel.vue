<template>
    <div class="container-fluid p-0">
    <swiper-container
    :slides-per-view="1"
    :space-between="0"
    :autoplay="true"
    :loop="true"
    :delay="500"
    class="h-100"
  >
    <swiper-slide class="text-center h-100"  v-for="(carousel,index) in carousels"
    :key="index" >
    <div class="carouselItem h-100">
        <img :src="getAssetPath(carousel.img)" alt="" class="carouselImage">
        <div class="carouselText">
            <h2>{{ carousel.title }}</h2>
            <p>{{ carousel.description }}</p>
        </div>
    </div>
    </swiper-slide>
    
    </swiper-container>
  
</div>
</template>
<script setup lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { register } from 'swiper/element/bundle';
register()
defineProps({
carousels:{type:Array<Object>}
})
</script>
<style scoped>
.container-fluid{
    height: 600px !important;
}
.carouselItem {
  position: relative;
  overflow: hidden;
}
.carouselImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
 
}
.carouselText {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 1;
}
</style>