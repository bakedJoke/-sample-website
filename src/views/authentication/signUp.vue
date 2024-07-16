<template>
     <body class="d-flex align-items-center py-4 bg-body-tertiary" style="height:100vh;">  
    <main class="form-signin w-25 m-auto">
    <form>
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating mb-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email">
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-2">
        <input type="text" class="form-control" id="floatingUsername" placeholder="UserName" v-model="user.username">
        <label for="floatingUsername">UserName</label>
        </div>
        <div class="form-floating mb-2">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
        <label for="floatingPassword">Password</label>
        </div>
         

        <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Remember me
        </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" @click="signUp">Sign in</button>
        <RouterLink to="/auth/sign-in">Already a Member!</RouterLink>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
    </form>
    </main>
</body>
</template>
<script setup>
import {ref} from 'vue'
import {appAxios} from '@/utils/axios';
import { RouterLink } from 'vue-router';


    const user=ref({
        email:null,
        username:null,
        password:null
    })
    const signUp = async ()=>{
            await appAxios.post('/users',user).then(promise=>{
                console.log(promise);
            })
    }
</script>
