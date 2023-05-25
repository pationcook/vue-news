<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import ListItem from '@/components/ListItem.vue';


export default {
    setup(){
    },
    components : {
        ListItem
    },
    // computed: {
    //     //mapping getter의 약자로 store에 연결된 getter를 매핑해서 사용할 수 있다.
    //     ...mapGetters([
    //         'GET_ASK'
    // ]),
    //     // ...mapGetters({
    //     //     askItem : 'GET_ASK'
    //     // }),
    //     // 위와 같이 사용하면 GET_ASK가 아닌 askItem으로 맵핑된다 name 지정 가능.
 
    // },
     methods:{
    //        //mapping action의 약자로 store의 actions에 연결된 것을 mapping 해준다.
         ...mapActions([
             'FETCH_ASK'
         ]),
     },
    created() {
         //위의 mapActions를 method로 선언한 FETCH_ASK를 함수로 바로 함수로 사용할 수 있다.  
         setTimeout(() => {
            this.FETCH_ASK()
            .finally(() => {
                console.log('로딩 종료 에밋')
                this.$emit('loading-end',{loading : false});
            })
         }, 1000);
    }
    

}
</script>