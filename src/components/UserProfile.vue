<template>
    <section>
        <div class="user-container">
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
                <div class="name">
                    <slot name="username"></slot>
                </div>
                <!-- <div class="name"> {{ info.id || info.user }} </div> -->
                <!-- 기존 tag들을 슬롯으로 변경하면 태그 째로 재활용이 가능하다. -->
                <!-- <router-link :to="`/user/${ info.user}`">
                    {{ info.id }}
                </router-link> -->
                <div class="time">
                    <slot name="time">
                    </slot>
                </div>
                <div>
                    <slot name="karma"></slot>
                </div>
            </div>
            
        </div>
        <h2> {{ info.title }} </h2>
    </section>
    <section>
        <div v-html="info.content"></div>
    </section>    
</template>
<script>
export default {
    props: {
        info: Object
    },
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
    .name {
        font-size: 1.5rem;
    }
    .user-description {
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }
</style>