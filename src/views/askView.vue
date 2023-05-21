<template>
    <div>
        askView 얘는 에스크임
    </div>
    <div v-for="ask in asks" v-bind:key="ask">
        {{ ask }}
    </div>
</template>

<script>
import { askList } from '../api/index.js';

export default {
    data() {
        return {
            asks:[]
        }
    },
    created() {
        askList()
        .then(response => {
            this.asks = response.data;
        })
        .catch(er => {
            console.error(er);
        });
    },
}
</script>