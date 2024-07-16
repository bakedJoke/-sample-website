import { ref } from 'vue'
import { defineStore } from 'pinia'

interface User{
  id:string,
  username?:string,
  email:string
}

export const useCounterStore = defineStore('counter', () => {
    const _isAuthentication = ref(false);
    const user=ref({} as User)
    const languagesLocal = 'en'

    function isSignIn(values:User){
       _isAuthentication.value=true
       user.value=values
    }
    function logOut(){
      _isAuthentication.value=false
    }

    

  return {
    _isAuthentication,
    isSignIn,
    logOut,
    user,
    languagesLocal
   }
})
