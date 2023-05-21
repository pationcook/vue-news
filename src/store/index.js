import {createStore} from 'vuex';
//vuex 는 상태관리 도구이며, 상태란, 여러 컴포넌트 간의 공유되는 데이터 속성이라고 말 할 수 있다.
import { jobsList } from '@/api';



export const store = createStore({
    state: {
        jobs : [],
    },
    getters: {
        getJobs(state) {
            return state.jobs;
        }
    },
    mutations: {
        SET_JOBS(state, payload) {
            state.jobs = payload;
        }
    },
    actions: {
        FETCH_JOBS() {
            jobsList()
                .then( res => {
                    console.log(res);
                    this.commit('SET_JOBS',res.data);
                })
                .catch( error => {
                    console.error(error);
                })
        }
    },
});