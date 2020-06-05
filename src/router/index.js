import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/pages/login";
import Dashboard from "@/components/dashboard";
import Products from "@/components/pages/products";
import CustomerOrder from "@/components/pages/customerOrder";


Vue.use(VueRouter);

export default new VueRouter({
  routes: [ //拼對喔
    {
      path: '*',
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
      children: [
        {
          name: 'products',
          path: 'products',
          component: Products,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      name: 'dashboard',
      path: '/',
      component: Dashboard,
      children: [
        {
        name: '模擬訂單',
        path: '/customerorder',
        component: CustomerOrder,
        }
      ]
    }
  ]
});