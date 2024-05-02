// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import SimulacrumComponent from "@/sections/simulacrum/components/simulacrum.component.vue";
import ContestListComponent from "@/sections/contest/components/contest-list.component.vue";
import plansComponent from "@/sections/plans/components/plans.component.vue";
import profileManagementComponent from "@/sections/profile-management/components/profile-management.component.vue";
import tutorsComponent from "@/sections/tutors/components/tutors.component.vue";
import technicalTestListComponent from "@/sections/technical-test/pages/technical-test-list.component.vue";
import technicalTestDetailListComponent from "@/sections/technical-test/pages/technical-test-detail-list.component.vue";
import contestDetailListComponent from "@/sections/contest/components/contest-detail-list.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/technical-tests', component: technicalTestListComponent, meta: { title: 'Technical Tests' } },
        { path: '/simulacrum', component: SimulacrumComponent, meta: { title: 'Simulacrum' } },
        { path: '/contest-list', component: ContestListComponent, meta: { title: 'Contest' } },
        { path: '/Premium', component: plansComponent, meta: { title: 'Premium' } },
        { path: '/User', component: profileManagementComponent, meta: { title: 'Profile Management' } },
        { path: '/Tutors', component: tutorsComponent, meta: { title: 'Tutors' } },
        { path: '/', redirect: '/technical-tests' },
        {path: '/details/:id', name: 'technical-test-details', component: technicalTestDetailListComponent,props: true },
        {path: '/courses/:id', name: 'contest-details', component: contestDetailListComponent,props: true },
    ]
});


router.beforeEach((to, from, next) => {
    let baseTitle = 'GetWork';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});

export default router;


