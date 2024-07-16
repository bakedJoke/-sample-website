import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes : Array<RouteRecordRaw>= [
  {
    path: '/',
    name: 'main',
    redirect:"/home",
    component: ()=>import("@/layouts/Main-Layout/mainLayout.vue"),
    children:[
      {
        path:'/home',
        name:'home',
        component: ()=>import("@/views/home/homeView.vue"),
      },
      {
        path:'/contact',
        name:'contact',
        component: ()=>import("@/views/contact/contactView.vue"),
      },
      {
        path:'/why',
        name:'why',
        component: ()=>import("@/views/whyPg/whyView.vue"),
      },
      {
        path:'/pricing',
        name:'pricing',
        component: ()=>import("@/views/pricing/pricingView.vue"),
      },
      {
        path:'/payment',
        name:'payment',
        component: ()=>import("@/views/payment/paymentView.vue"),
      }
    ]
  },
  {
    path:'/auth',
    name:'auth',
    component:()=>import("@/layouts/Auth-layout/authLayout.vue"),
    children:[
      {
        path:'sign-in',
        name:'sign-in',
        component:()=>import("@/views/authentication/signIn.vue")
      },
      {
        path:'sign-up',
        name:'sign-up',
        component:()=>import("@/views/authentication/signUp.vue")
      },
      {
        path:'adminPanel',
        name:'adminPanel',
        component: ()=>import("@/views/dashboard/dashboardView.vue"),
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  
})

export default router
