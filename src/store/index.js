import {createStore} from 'vuex';
//vuex 는 상태관리 도구이며, 상태란, 여러 컴포넌트 간의 공유되는 데이터 속성이라고 말 할 수 있다.
import { jobsList } from '@/api';
import { AskModule } from './modules/AskModule';


// vue.js에서 store를 사용하는 이유는 상태관리를 보다 효율적으로 하기 위함이다.
// vue.js는 직접적으로 컴포넌트 간의 데이터 공유를허용하지 않기 때문에 
// 부모 - 자식 관계 컴포넌트 간의 데이터 전달과 관리가 복잡해 질수 있다. (props를 이용한 emmit 같은 경우)
// vuex를 이용하여 store를 생성하게 되면 전역에서 상태를 관리할 수 있게 되고 위의 문제를 단순화시킬 수 있기 때문에
// 권장하는 방법이다.
export const store = createStore({


    //데이터들의 상태를 보관
    state: {
        jobs : [],
    },

    //상태를 가져오기 위해 사용됨. 확장하여 계산 로직을 추가하여 사용할 수 도 있다. (Computed와 동일한 속성)
    getters: {
        getJobs(state) {
            return state.jobs;
        }
    },

    //변이를 일이키기 위해 사용됨 (상태를 변경하기 위함) -> 동기식인 것만 사용
    mutations: {
        SET_JOBS(state, payload) {
            state.jobs = payload;
        }
    },

    //비동기에 대한 변이를 일으키기 위해서 사용됨
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
    modules : {
        askModule : AskModule
    }
});