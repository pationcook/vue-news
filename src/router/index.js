
import { createRouter, createWebHashHistory} from 'vue-router';
import { headerMenuRoutes } from './headerMenu';




export const router = new createRouter({
    //createWebHistory : vue에서 제공해주는 webHistory를 지원
    // history : createWebHistory(), < - history 모드와 hash모드 차이점
    // history 모드는 화면 재 로딩이 일어나기 때문에 404가 나타날수 있다. 만약 이걸 기존 웹 동작 방식처럼 변경하기 위해서는
    // 기존 ssr이라 하여 서버에서 페이지를 접하여 나누어 주기 때문에 현재 server가 별도 없는 기본 vue sap환경에선 404가 뜬다.
    // hash 모드는 해시태그처럼 맵핑 해주는 유알엘 관계로 404 오류는 존재하지 않는다.
    history: createWebHashHistory(),
    routes : headerMenuRoutes
})