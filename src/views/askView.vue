<template>
    <div>
        askView 얘는 에스크임
    </div>
    <!-- mapGetters에 있는 get_ask를 바로 접근하여 코딩 할 수 있다. -->
    <div v-for="ask in GET_ASK" v-bind:key="ask">
        {{ ask }}
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';



export default {
    computed: {
        //mapping getter의 약자로 store에 연결된 getter를 매핑해서 사용할 수 있다.
        ...mapGetters([
            'GET_ASK'
        ]),
    },
    //mapping action의 약자로 store에 연결된 것을 mapping 해준다.
    ...mapActions([
        'FETCH_ASK'
    ]),
}
</script>