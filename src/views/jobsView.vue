<template>
    <div>
        <list-item></list-item>
    </div>
    <!-- <ul class="jobs">
        <li class="post" v-for="job in $store.getters.GET_JOBS" v-bind:key="job.id" :id="job.id">
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
    </ul> -->
    <!-- 키 propery는 외부에 노출되지 않습니다. -->
</template>


<script>
//import { jobsList } from '../api/index.js';
// import { useStore } from 'vuex';
import ListItem from '@/components/ListItem.vue';


export default {
  components: { ListItem },
  created() {
        // const store = useStore();
        // store.dispatch('FETCH_JOBS');
  },
}
</script>