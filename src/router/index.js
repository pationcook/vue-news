
import { createRouter, createWebHashHistory} from 'vue-router';
import { headerMenuRoutes } from './headerMenu';




export const router = new createRouter({
    //createWebHistory : vue에서 제공해주는 webHistory를 지원
    // history : createWebHistory(), < - history 모드와 hash모드 차이점
    // history 모드는 우리가 기존 jquery를 이용하여 java 같은데서 웹문서를 받아오던 것처럼 리다이렉션 처럼 보이지만, 
    // 그것인 기존 ssr이라 하여 서버에서 페이지를 접하여 나누어 주기 때문에 현재 server가 별도 없는 기본 vue sap환경에선 404가 뜬다.
    // hash 모드는 해시태그처럼 맵핑 해주는 유알엘 관계로 404 오류는 존재하지 않는다.
    history: createWebHashHistory(),
    routes : headerMenuRoutes
})