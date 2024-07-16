<template>
<div id="container" class="container-fluid  bg-light border-bottom">  
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="fs-4">VERA</span>
      </a>

      <ul class="nav nav-pills align-items-center">
        <li class="nav-item"><RouterLink class="nav-link" to="/why">{{ $t('why') }}</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" to="/">{{ $t('features') }}</RouterLink></li>
        <li class="nav-item"><RouterLink to="/pricing" class="nav-link">{{ $t('pricing') }}</RouterLink></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><RouterLink href="#" class="nav-link" to="/contact">{{ $t('contact') }}</RouterLink></li>
        <li class="ms-5"> 
          <div class="dropdown">
            <a data-bs-toggle="dropdown" type="button">
              <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" class="bi bi-person-circle rounded-circle " viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </a>
          <ul class="dropdown-menu" v-if="!store._isAuthentication">
            <li><RouterLink class="dropdown-item" to="/auth/sign-up">{{ $t('signUp') }} </RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/auth/sign-in">{{ $t('signIn') }}</RouterLink></li>
          </ul>
          <ul class="dropdown-menu" v-else>
            <li><RouterLink class="dropdown-item" to="/auth/sign-up">{{ $t('profile') }}</RouterLink></li>
            <li><a class="dropdown-item" @click="logOutBtn">{{ $t('logout') }}</a></li>
          </ul>
        </div>
        </li>
        <li class="nav-item ms-3" v-if="$i18n.locale==`tr`">
          <a type="button" @click="$i18n.locale=`en`"><img :src="getAssetPath('images/svg/united-states.svg')" alt="" height="25" width="25"></a>
        </li>
        <li class="nav-item ms-3" v-else>
          <a type="button" @click="$i18n.locale=`tr`"><img :src="getAssetPath('images/svg/turkey.svg')" alt="" height="25" width="25"></a>
        </li>

      </ul>

    </header>
  </div>
</div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useCounterStore } from '@/store/counter'
import {getAssetPath} from "@/core/helpers/assets"
const store = useCounterStore();

const logOutBtn=()=>{
  store.logOut();
  window.location.reload();
}



     


  


</script>