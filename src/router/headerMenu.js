
import itemView from '../views/ItemView.vue';
import userView from '../views/UserView.vue';
import CreatedListView from '@/views/CreatedListView';
import NewsView from '../views/NewsView.vue';
import chartView from '../views/ChartView.vue'

import commonView from '../views/CommonView.vue'
import slotView from '../views/SlotView.vue'
import controlledView from '../views/ControlledView.vue'
import renderlessView from '../views/RenderlessView.vue'

import { store } from '@/store';
//import bus from '../components/bus.js';
//route도 모듈화
export const headerMenuRoutes = [
    {
        path : '/news',
        name : 'news',
        component: NewsView,
        beforeEnter : (to, from ,next) => {
        //일반적으로 인증정보를 팅겨내기 위하여 사용하게 된다.
            //this.$emit('loading-start',{loading : true});
            store.dispatch('FETCH_LIST',to.name)
            .finally(() => {
                //this.$emit('loading-end',{loading : false});
                next();
            });
        }
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
    {
        path : '/chart',
        component: chartView,
    },
    {
        path : '/common',
        component: commonView,
    },
    {
        path : '/slot',
        component: slotView,
    },
    {
        path : '/controlled',
        component: controlledView,
    },
    {
        path : '/renderless',
        component : renderlessView,
    }
]