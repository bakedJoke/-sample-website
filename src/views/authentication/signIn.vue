<template>
    <body class="d-flex align-items-center py-4 bg-body-tertiary" style="height:100vh;">  
    <main class="w-25 m-auto">
    <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating mb-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="data.email">
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="data.password">
        <label for="floatingPassword">Password</label>
        </div>
        

        <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Remember me
        </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="button" @click="signIn">Sign in</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
    </form>
    </main>
</body>
</template>
<script setup>
import {ref} from 'vue'
import {appAxios} from '@/utils/axios'
import { useRouter } from "vue-router";
import { useCounterStore } from '@/store/counter'
const router = useRouter();
const data = ref({
    email:'',
    password:''
})
const signIn = async ()=>{
    await appAxios.get(`/users?_value.email=${data.value.email}&_value.password=${data.value.password}`).then(response=>{
        console.log(response);
        if (response.status==200) {
            const user ={
                username:response.data[0]._value.username,
                email:response.data[0]._value.email,
                id:response.data[0].id
            }
            useCounterStore().isSignIn(user);
            router.push({name:"home"})
        }
    })
}
</script>