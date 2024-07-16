<template>
    <introducktion :title="title"></introducktion>
    <div class="container p-5 mt-2">
        <div class="text-center mb-5">
            <h3 class="fw-bold">One Platform for the Performance Ecosystem</h3>
            <h2 class="fw-light fs-5">Unlock any partnership across mobile and web with one powerfully flexible platform.</h2>
        </div>
        <div class="row featurette align-items-center">
            <div class="col-md-6">
                <div class="mb-5">
                <h4 class="featurette-heading fw-bold lh-1 mb-5">Do More Across Mobile and Web</h4>
                <p class="fw-light">The TUNE platform was built from the ground up to work for any partner across any digital channel, including app, mobile web, and desktop. No other platform can do the same. It’s why more performance networks run their business on our technology than the rest of the competition combined.</p>
                <ul>
                    <li><p>Integrate with any mobile network and any mobile measurement partner</p></li>
                    <li><p>Bring together all of your marketing partners, networks, channels, and campaigns in one place</p></li>
                    <li><p>Build deep links and universal links into your customer experience</p></li>
                </ul>
            </div>
        </div>
        <!-- --------------------- -->
        <div class="col-md-6">
            <img :src="getAssetPath('images/componentImg/our-platform-data.png')" alt="" class="w-100">
        </div>
        </div>
    </div>
    <div class="container p-5 mt-2">
        <div class="row featurette align-items-center">
            <div class="col-md-6">
            <img :src="getAssetPath('images/componentImg/our-platform-mobile.png')" alt="" class="w-100">
            </div>
            <!-- --------------------- -->
            <div class="col-md-6">
                    <div class="mb-5">
                    <h4 class="featurette-heading fw-bold lh-1 mb-5">Do More With Your Data</h4>
                    <p class="fw-light">When you measure partner performance on TUNE's platform, you can trust your data is in good hands — after all, we invented the postback, the standard for tracking on app, mobile web, and desktop. Combined with real-time reporting and data streaming, our innovative capabilities ensure every TUNE customer has measurement that’s accurate, up-to-date, and just works.</p>
                    <ul>
                        <li><p>Measure cross-channel with cookieless postback tracking</p></li>
                        <li><p>Take action with real real-time reporting, complete event logging, and API-driven data sharing</p></li>
                        <li><p>Stream all of your data to any internal system or third party with the only fully automated event delivery system in performance marketing SaaS</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid align-items-center justify-content-center d-flex" style="background-image:linear-gradient(to right,#213AAA,#6132C3);height: 600px;">
        <div class="row align-items-center justify-content-center" >
            <div class="text-white text-center mb-3">
                <h2>Do More Your Way</h2>
                <p>Enabling your success is our goal. Getting there means making the partner experience work for you.</p>
            </div>
            <div class="col-md-4 mx-3 text-center bg-white">
                <div class="h-100  py-5 px-4">
                <h2 class="fs-4 fw-bold mb-4">… Or Let Us Build It For You</h2>
                <p class="fw-light">We offer technical development and consulting services for customers of all sizes. If you know what you want, we can build it for you. And if you don’t know what you need, we can help figure it out.</p>
                <button class="btn btn-primary btn-lg mt-3" type="button">See Our Servicen</button>
                </div>
            </div>
            <div class="col-md-4 mx-3 text-center bg-white">
                <div class="h-100 py-5 px-4">
                <h2 class="fs-4 fw-bold mb-4">Build Anything On Our API</h2>
                <p class="fw-light">The industry’s most flexible two-way API underlies the TUNE platform — over 650 endpoints. Almost every function is achievable via API, so you can build your perfect solution on top of our own.</p>
                <button class="btn btn-primary btn-lg mt-3" type="button">See Documentation</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import introducktion from "@/components/introducktion/introduction.vue"
import {getAssetPath} from "@/core/helpers/assets.ts"
const title = "VERA Partner Marketing Platform"


</script>