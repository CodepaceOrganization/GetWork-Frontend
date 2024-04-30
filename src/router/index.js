// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import SimulacrumComponent from "@/sections/components/simulacrum.component.vue";
import ContestListComponent from "@/contest/components/contest-list.component.vue";
import plansComponent from "@/sections/components/plans.component.vue";
import profileManagementComponent from "@/sections/components/profile-management.component.vue";
import tutorsComponent from "@/sections/components/tutors.component.vue";
import technicalTestListComponent from "@/technical-test/pages/technical-test-list.component.vue";
import technicalTestDetailListComponent from "@/technical-test/pages/technical-test-detail-list.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/technical-tests', component: technicalTestListComponent, meta: { title: 'Technical Tests' } },
        { path: '/simulacrum', component: SimulacrumComponent, meta: { title: 'Simulacrum' } },
        { path: '/contest-list', component: ContestListComponent, meta: { title: 'Contest' } },
        { path: '/Premium', component: plansComponent, meta: { title: 'Premium' } },
        { path: '/User', component: profileManagementComponent, meta: { title: 'Profile Management' } },
        { path: '/Tutors', component: tutorsComponent, meta: { title: 'Tutors' } },
        { path: '/', redirect: '/home' },
        { path: '/details-3', component: technicalTestDetailListComponent, meta: { title: 'Technical Test Details' } }
    ]
});


router.beforeEach((to, from, next) => {
    let baseTitle = 'GetWork';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});

export default router;


