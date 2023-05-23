
import { createRouter, createWebHistory } from 'vue-router';
import { headerMenuRoutes } from './headerMenu';




export const router = new createRouter({
    //createWebHistory : vue에서 제공해주는 webHistory를 지원
    history : createWebHistory(),
    routes : headerMenuRoutes
})