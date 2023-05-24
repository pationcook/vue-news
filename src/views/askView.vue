<template>
    <ul class="ask-list">
        <!-- mapGetters에 있는 get_ask를 바로 접근하여 코딩 할 수 있다. -->
        <li class="post" v-for="ask in GET_ASK" v-bind:key="ask">
            <div class="points">
                {{ ask.points || 0 }}
            </div>
            <div>
                <p class="ask-title">
                    <a :href="`/item/${ask.id}`"> {{ ask.title }}</a>
                </p>
                <small class="link-text">
                    by
                    <a :href="`/user/${ask.user}`">
                        {{ ask.user }}
                    </a>
                </small>
            </div>
        </li>
    </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';



export default {
    computed: {
        //mapping getter의 약자로 store에 연결된 getter를 매핑해서 사용할 수 있다.
        ...mapGetters([
            'GET_ASK'
    ]),
        // ...mapGetters({
        //     askItem : 'GET_ASK'
        // }),
        // 위와 같이 사용하면 GET_ASK가 아닌 askItem으로 맵핑된다 name 지정 가능.
 
    },
    methods:{
           //mapping action의 약자로 store의 actions에 연결된 것을 mapping 해준다.
        ...mapActions([
            'FETCH_ASK'
        ]),
    },
    created() {
        //위의 mapActions를 method로 선언한 FETCH_ASK를 함수로 바로 함수로 사용할 수 있다.
        this.FETCH_ASK()
    }
    

}
</script>

<style scoped>
    .ask-list {
        margin:  0;
        padding: 0;
    }
    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #c9c0c0;
    }
    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(157, 212, 136);
    }
    .ask-title{
        margin: 0;
    }
    .link-text{
        color:gray;
    }
</style>