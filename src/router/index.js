
import newsView from '../views/newsView.vue';
import askView from '../views/askView.vue';
import jobsView from '../views/jobsView.vue';
import { createRouter, createWebHistory } from 'vue-router';




export const router = new createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/news',
            component: newsView,
        },
        {
            path : '/jobs',
            component: jobsView,
        },
        {
            path : '/ask',
            component: askView,
        }
    ]
})