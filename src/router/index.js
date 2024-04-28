// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import SimulacrumComponent from "@/sections/components/simulacrum.component.vue";
import TutorsComponent from "@/sections/components/tutors.component.vue";
import PlansComponent from "@/sections/components/plans.component.vue";
import ProfileManagementComponent from "@/sections/components/profile-management.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/simulacrum', component: SimulacrumComponent, meta: { title: 'Simulacrum' } ,},
        { path: '/tutors', component: TutorsComponent, meta: { title: 'Tutors' } },
        { path: '/Premium', component: PlansComponent, meta: { title: 'Premium' } },
        { path: '/User', component: ProfileManagementComponent, meta: { title: 'User' } },
        { path: '/',          redirect: '/home' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'GetWork';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;


