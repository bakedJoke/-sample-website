<template>
        
    <introducktion :title="title"></introducktion>
    <!-- ----------------------------- -->
<div class="container p-5 mt-2">
    <div class="text-center mb-5">
        <h3 class="fw-bold">Let’s Start a Conversation</h3>
    </div>
    <div class="row featurette align-items-center">
        <div class="col-md-6">
            <div class="mb-5">
            <h4 class="featurette-heading fw-bold lh-1 mb-5">Ask how we can help you:</h4>
            <p class="fw-light"><span class="fw-medium d-block">See our platform in action</span>Request a personalized demo of TUNE’s partner marketing platform.</p>
            <p class="fw-light"><span class="fw-medium d-block">Master performance marketing</span>From TUNE Academy courses to industry research and insights, learn how to grow your business through performance-based partnerships.</p>
            <p class="fw-light"><span class="fw-medium d-block">Explore life at TUNE</span>Search open positions, read about company culture and values, and explore our charitable initiatives.</p>
        </div>
        <div>
            <h4 class="featurette-heading fw-bold lh-1 mb-5">Points of Contact</h4>
            <p class="fw-light"><span class="fw-medium d-block">U.S. | TUNE</span>11350 McCormick Rd, EP III, Suite 200,
            Hunt Valley, MD 21031</p>
            <p class="fw-light"><span class="fw-medium d-block">Billing Inquiries</span>(855) 979-7887</p>
            <p class="fw-light"><span class="fw-medium d-block">Information and Sales</span><a href="" class="nav-link text-primary">celebiubeydullah@gmail.com</a></p>
        </div>
    </div>
      
     
      <!-- --------------------- -->
      <div class="col-md-6">
       <contactForm></contactForm>
      </div>
    </div>
</div>
</template>
<script setup>
import contactForm from '@/components/contact/contactForm.vue'
import introducktion from '@/components/introducktion/introduction.vue'
const title = "Contact Us"
</script>