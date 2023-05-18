
import newsView from '../views/NewsView.vue';
import askView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
import itemView from '../views/ItemView.vue';
import userView from '../views/UserView.vue';
import { createRouter, createWebHistory } from 'vue-router';




export const router = new createRouter({
    //createWebHistory : vue에서 제공해주는 webHistory를 지원
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
        },
        {
            path : '/item',
            component: itemView,
        },
        {
            path : '/user',
            component: userView,
        }
    ]
})