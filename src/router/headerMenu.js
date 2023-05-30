
import itemView from '../views/ItemView.vue';
import userView from '../views/UserView.vue';
import CreatedListView from '@/views/CreatedListView';
import NewsView from '../views/NewsView.vue';
//route도 모듈화
export const headerMenuRoutes = [
    {
        path : '/news',
        name : 'news',
        component: NewsView,
    },
    {
        path : '/jobs',
        name : 'jobs',
        component: CreatedListView('AskView'),
    },
    {
        path : '/ask',
        name : 'ask',
        component: CreatedListView('JobsView'),
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