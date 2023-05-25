<template>
    <div>
        <user-profile :info="GET_ITEM_INFO">
            <template v-slot:username>
                <router-link :to="`/user/${GET_ITEM_INFO.user}`">
                        {{ GET_ITEM_INFO.user }}
                </router-link>
            </template>
            <template v-slot:time> {{ GET_ITEM_INFO.time_ago }}</template>
            <!-- template은 slot을 뚫어놓았을때 태그 없이 text만 들어간다. -->
        </user-profile>
        <!-- itemView
        <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${GET_ITEM_INFO.user}`">
                        {{ GET_ITEM_INFO.user }}
                    </router-link>
                </div>
                <div class="time"> {{ GET_ITEM_INFO.time_ago }}</div>
            </div>
            <h2> {{ GET_ITEM_INFO.title }} </h2>
        </section>
        <section>
            <div v-html="GET_ITEM_INFO.content"/>
        </section> -->
    </div>    
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters, mapActions } from 'vuex';


export default {
    components : {
        UserProfile
    },
    computed : {
        //GETTERS는 반드시 컴퓨티드 속성에
        ...mapGetters([
            'GET_ITEM_INFO'
        ]),
        
    },
    methods : {
        //액션즈는 반드시 메소드에
        ...mapActions([
            'FETCH_ITEM'
        ])
    },
    created() {
      this.FETCH_ITEM(this.$route.params.id);  
    }
}
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description {
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }
</style>