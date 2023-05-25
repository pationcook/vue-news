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
            return this.$store.getters.GET_LIST
        }
    },
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