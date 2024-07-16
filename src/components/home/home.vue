<template>
 
  <carousel :carousels="carousels"></carousel>
  <div class="container text-center pt-3">
    <div class="row m-5">
      <productCard
        v-for="(card, index) in cardList"
        :key="index"
        :title="card.title"
        :description="card.description"
        :img="card.img"
      ></productCard>
    </div>
  </div>

  <template v-for="(feature, index) in features" :key="index">
    <featuresCard
      :class="index % 2 == 0 && 'flex-row-reverse'"
      :featuresDescription="feature.featuresDescription"
      :featuresTitle="feature.featuresTitle"
      :featuresImg="feature.featuresImg"
    ></featuresCard>
  </template>
</template>
<script setup lang="ts">
import carousel from "@/components/home/carousel.vue";
import productCard from "@/components/cards/productCard.vue";
import featuresCard from "@/components/cards/featuresCard.vue";

import { getAssetPath } from "@/core/helpers/assets";
const cardList = [
  {
    img: getAssetPath("images/componentImg/work-environment.jpg"),
    description: "kart1 acıklama",
    title: "kart1 baslik",
  },
  {
    img: getAssetPath("images/componentImg/healthy-work-environment.webp"),
    description: "kart1 acıklama",
    title: "kart1 baslik",
  },
  {
    img: getAssetPath("images/componentImg/HEALTHY-WORK-ENVIRONMENT.jpeg"),
    description: "kart1 acıklama",
    title: "kart1 baslik",
  },
];
const features = [
  {
    featuresImg: getAssetPath("images/componentImg/our-platform-data.png"),
    featuresTitle: "features title",
    featuresDescription: "features description",
  },
  {
    featuresImg: getAssetPath("images/componentImg/our-platform-mobile.png"),
    featuresTitle: "features title",
    featuresDescription: "features description",
  },
];
const carousels = [
  {
    img: "images/componentImg/desktop-wallpaper.jpg",
    description: "features title",
    title: "features description",
  },
  {
    img:"images/componentImg/target-audience.webp",
    description: "features title",
    title: "features description",
  },
];
</script>
