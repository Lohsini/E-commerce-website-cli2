import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/pages/login";
import Dashboard from "@/components/dashboard";
import Products from "@/components/pages/products";


Vue.use(VueRouter);

export default new VueRouter({
  routes:[ //拼對喔
    {
      path:'*',
      redirect: '/login'
    },
    {
      name: '登入',
      path: '/login', 
      component: Login,
    },
    {
      name: 'dashboard',
      path: '/admin',
      component: Dashboard,
      meta:{ requiresAuth:true },
      children:[
        {
          name: 'products',
          path: 'products',
          component: Products,
          meta:{ requiresAuth:true }
        },
      ]
    }
  ]
});