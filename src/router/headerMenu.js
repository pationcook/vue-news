
import newsView from '../views/NewsView.vue';
import askView from '../views/AskView.vue';
import jobsView from '../views/JobsView.vue';
import itemView from '../views/ItemView.vue';
import userView from '../views/UserView.vue';

//route도 모듈화
export const headerMenuRoutes = [
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
        path : '/item/:id',
        component: itemView,
    },
    {
        path : '/user/:id',
        component: userView,
    },
]