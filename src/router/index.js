// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import SimulacrumComponent from "@/sections/components/simulacrum.component.vue";
import ContestListComponent from "@/contest/components/contest-list.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/simulacrum', component: SimulacrumComponent, meta: { title: 'Simulacrum' } },
        { path: '/contest-list', component: ContestListComponent, meta: { title: 'Contest' } },
        { path: '/',          redirect: '/home' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'GetWork';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;


