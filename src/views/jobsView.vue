<template>
    <div>
        jobsView
    </div>
    <!-- 키 propery는 외부에 노출되지 않습니다. -->
    <div v-for="job in jobs" v-bind:key="job.id" :id="job.id">
        {{ job.title }}
    </div>
</template>


<script>
//import { jobsList } from '../api/index.js';
import { useStore } from 'vuex';



export default {
    data() {
        return {
            jobs:[],
        }
    },
    method(){

    },
    computed(){

    },
    created() {
        const store = useStore();
        store.dispatch('FETCH_JOBS');
        this.jobs = store.getters.getJobs;
    },
    mounted(){
        console.log('마운트중');
        
    },
    destory(){
        
    }
}
</script>