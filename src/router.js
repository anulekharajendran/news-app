import Vue from 'vue';
import Router from 'vue-router';
import { VueSpinners } from '@saeris/vue-spinners';

Vue.use(Router);
Vue.use(VueSpinners);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'Layout',
    component: () => import('./views/Layout.vue'),
    props: true,
    children: [{
      name: 'Home',
      path: '',
      component: () => import('./components/Home.vue'),
      props: true,
    }],
  },
  ],
});
