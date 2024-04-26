import {createRouter, createWebHistory} from "vue-router";
import ProblemsContent from "@/public/pages/problems-content.component.vue";
import contestContent from "@/sections/components/contest-content.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/problems', component: ProblemsContent, meta: {title: 'Problems'},},
        {path: '/contest', component: contestContent, meta: {title: 'Contest'},},
        {path: '/', redirect: '/problems'}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Getwork-Frontend';
    document.title = `${baseTitle} | ${to.meta["title"]}`;
    next();
});
export default router;