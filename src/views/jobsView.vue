<template>
    <div>
        jobsView
    </div>
    <!-- 키 propery는 외부에 노출되지 않습니다. -->
    <div v-for="job in $store.getters.getJobs" v-bind:key="job.id" :id="job.id">
        <a v-bind:href="job.url">{{ job.title }}</a>
        <small>{{ job.domain }}</small>
    </div>
</template>


<script>
//import { jobsList } from '../api/index.js';
import { useStore } from 'vuex';



export default {
    data() {
    },
    method(){

    },
    computed(){

    },
    created() {
        const store = useStore();
        store.dispatch('FETCH_JOBS');
    },
    mounted(){
        
    },
    destory(){
        
    }
}
</script>