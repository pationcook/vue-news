<template>
    <ul class="jobs">
        <li class="post" v-for="job in $store.getters.getJobs" v-bind:key="job.id" :id="job.id">
            <div class="points">
                {{ job.points || 0 }}
            </div>
            <div>
                <p class="job-title">
                    <a v-bind:href="job.url">{{ job.title }}</a>
                </p>
                 <small class="link-text">
                    {{ job.time_ago }} by
                    <a :href="job.url">
                        {{ job.domain }}
                    </a>
                    <span  v-if="!job.domain">
                        {{ "none" }}
                    </span>
                </small>
            </div>
        </li>
    </ul>
    <!-- 키 propery는 외부에 노출되지 않습니다. -->
    
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

<style scoped>
    .jobs {
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
    .job-title{
        margin: 0;
    }
    .link-text{
        color:gray;
    }
</style>