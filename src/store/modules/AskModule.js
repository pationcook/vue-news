import { askList } from "@/api";
export const AskModule = {
    state : () => ({
        asks : []
    }),
    mutations: {
        SET_ASK(state,payload) {
            state.asks = payload;
        }
    },
    getters : {
        GET_ASK(state){
            return state.asks;
        }
    },
    actions : {
        FETCH_ASK() {
           askList()
            .then( res => {
                console.log(res);
                this.commit('SET_ASK',res.data)
            });
        }
        
    }
}