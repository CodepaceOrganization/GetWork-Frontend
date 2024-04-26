import {createRouter, createWebHistory} from "vue-router";
import HomeContent from "@/public/pages/home-content.component.vue";
import contestContent from "@/public/pages/Contest/contest-content.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: HomeContent, meta: { title: 'Home' }, },
        { path: '/contest', component: contestContent, meta: { title: 'Contest' }, },
        { path: '/', redirect: '/home' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Getwork-Frontend';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;