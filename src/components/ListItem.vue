<template>
    <div>
        <ul class="list">
            <li class="post" v-for="(item) in ListItems" v-bind:key="item">
                <diV class="points">
                    {{ item.points || 0}}
                </diV>
                <div>
                    <p class="list-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text"> 
                        {{ item.time_ago }} by
                            <router-link :to="`/user/${item.user}`" v-if="item.user">
                            {{ item.user }}
                            </router-link>
                            <a :href="item.url" v-else>
                                {{ item.domain }}
                            </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        ListItems() {
            const name = this.$route.name;
            if(name === 'news'){
                return this.$store.getters.GET_NEWS;
            } else if (name === 'jobs') {
                return this.$store.getters.GET_JOBS;
            } else if (name === 'ask') {
                return this.$store.getters.GET_ASK;
            } else {
                return [];
            }
        }
    },
    methods: {

    },
    created() {
        const name = this.$route.name;
        if(name === 'news'){
            this.$store.dispatch('FETCH_NEWS');
        } else if (name === 'jobs') {
            this.$store.dispatch('FETCH_JOBS');
        } else if (name === 'ask') {
            this.$store.dispatch('FETCH_ASK');
        }
        
    }
}
</script>
<style scoped>
    .list{
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
        color: rgb(81, 172, 45);
    }
    .list-title{
        margin: 0;
    }
    .link-text{
        color:gray;
    }
    
    a:link {
       color:black;
    }
    a:visited{
        color: black;
    }
</style>