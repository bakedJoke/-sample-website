<template>
<introducktion :title="title"></introducktion>
<div class="container py-3">
  <header>
    <div class="p-5 mx-auto text-center">
      <h1 class="fw-normal">Pricing</h1>
      <p class="fs-5 fw-light">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
  </header>

  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-5 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">CONTRACT</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title mb-4">Custom</h1>
            <RouterLink v-if="isAuth" to="/payment" class="w-75 btn btn-lg btn-outline-primary">Request a  <br> Quote</RouterLink>
            <RouterLink v-else to="/auth/sign-in" class="w-75 btn btn-lg btn-outline-primary">Request a  <br> Quote</RouterLink>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 border-primary text-bg-primary">
            <h4 class="my-0 fw-normal">SCALE</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title mb-4">$1,500<small class="text-body-secondary fw-light">/mo</small></h1>
            <RouterLink v-if="isAuth" to="/payment" class="w-75 btn btn-lg btn-primary">Request a  <br> Consultation</RouterLink>
            <RouterLink v-else to="/auth/sign-in" class="w-75 btn btn-lg btn-primary">Request a  <br> Quote</RouterLink>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm ">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">BOOTSTRAP</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title mb-4">$599<small class="text-body-secondary fw-light">/mo</small></h1>
            <RouterLink to="/payment" class="w-75 btn btn-lg btn-primary">Request a  <br> Consultation</RouterLink>
          </div>
        </div>
      </div>
    </div>


    <div class="table-responsive ">
      <table class="table text-center table-bordered table-striped">
        <thead>
          <tr>
            <th style="width: 34%;" class="text-start fs-4 fw-semibold py-4 px-4">Features</th>
            <th style="width: 22%;" class="fs-4 fw-semibold  py-4">Bootstrap</th>
            <th style="width: 22%;" class="fs-4 fw-semibold py-4">Scale</th>
            <th style="width: 22%;" class="fs-4 fw-semibold  py-4">Custom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Partner Payments</th>
            <td>Fee Based</td>
            <td>Fee Based</td>
            <td>Fee Based</td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Partner Recruitment</th>
            <td>Not Included</td>
            <td>Optional add on</td>
            <td>Optional add on</td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Permissions</th>
            <td>Not Included</td>
            <td>Included</td>
            <td>Included</td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Onboarding</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Support</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Conversions Included</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Secure Custom Application and Tracking Domain</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start fw-medium px-4">Campaign Managementd</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>

</div>
</template>
<script setup lang="ts">
import introducktion from '@/components/introducktion/introduction.vue'
import { RouterLink } from 'vue-router';
import { useCounterStore } from '@/store/counter'
import { computed } from "vue";
const counterStore = useCounterStore()
const isAuth=computed(()=>{
  return counterStore._isAuthentication
})
const title = 'GROW YOUR PARTNERSHIPS WITH THE RIGHT PLAN'
</script>