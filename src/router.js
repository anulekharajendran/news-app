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
            component: () =>
                import ('./views/Layout.vue'),
            props: true,
            children: [{
                    name: 'Home',
                    path: '',
                    component: () =>
                        import ('./components/Home.vue'),
                    props: true,
                    // redirect: 'general'
                },
                {
                    name: 'General',
                    path: 'general',
                    component: () =>
                        import ('./components/categories/General.vue'),
                    props: true,
                },
                {
                    name: 'Business',
                    path: 'business',
                    component: () =>
                        import ('./components/categories/Business.vue'),
                    props: true,
                },
                {
                    name: 'Technology',
                    path: 'technology',
                    component: () =>
                        import ('./components/categories/Technology.vue'),
                    props: true,
                },
                {
                    name: 'Sports',
                    path: 'sports',
                    component: () =>
                        import ('./components/categories/Sports.vue'),
                    props: true,
                },
                {
                    name: 'Entertainment',
                    path: 'entertainment',
                    component: () =>
                        import ('./components/categories/Entertainment.vue'),
                    props: true,
                },
                {
                    name: 'Health',
                    path: 'health',
                    component: () =>
                        import ('./components/categories/Health.vue'),
                    props: true,
                },
                {
                    name: 'Science',
                    path: 'science',
                    component: () =>
                        import ('./components/categories/Science.vue'),
                    props: true,
                },
            ],
        },
    ],
});