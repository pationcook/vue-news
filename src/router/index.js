
import newsView from '../views/NewsView.vue';
import askView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
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