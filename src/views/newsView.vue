<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item) in news" v-bind:key="item">
                <diV class="points">
                    {{ item.points }}
                </diV>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text"> by {{ item.time_ago }} <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small>
                </div>
            </li>
        </ul>
        <!-- id 앞에 :을 붙이면 data와 mapping 가능한 형태로 만들어준다.-->
        <!-- <span :id="newsId">{{ this.newsTitle }}</span> -->
        <!-- 위의 문법이 vue 권장 형태 -->
        <!-- <span id="key2">{{ this.newsTitle }}</span> -->


        <!-- v-for 문은 v-bind:key 를 요구하는 옵션이 존재하므로 반드시 해당 문법으로 만든다 v-bind 옵션에서 
            :key는 id와 같은 역할을한다. -->
        <!-- <div v-for="(item) in news" v-bind:key="item"> -->
            <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
            <!-- <small> {{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small> -->
        <!-- </div> -->
    </div>
</template>

<script>
import { newsList } from '../api/index.js';

export default {
    data() {
        return {
            news:[],
            newsId:'key',
            newsTitle:'뉴 스 타 이 틀'
        }
    },
    created() {
        const vm = this;
        newsList()
        .then(function(response){
            vm.news = response.data;

            // -> 화살표함수와 일반 함수의 차이점은
            // 여러가지가 있지만, 여기서 볼 수 있는 차이점은 this의 접근이다.
            // this 란 해당 함수의 스코프 영역에 따라 명시되는 것인데, 
            // javascript 문법에서의 this는 인스턴스를 해서 불러오는 함수에서는 
            // 함수를 명시하게 되고 일반 함수를 만들어서 선언하게 되면 전역을 명시하게 된다.
            // 위의 함수 newsList는 new Vue로 로딩되는 인스턴스 안의 created() 함수에서 호출되고 있으므로
            // created 안에서 this를 출력해보면 Vue Component를 가르키게 된다.
            // 하지만 newsList 의 .then() 함수에 this를 호출하게 되면 undefined가 뜨게 되는데
            // 이 이유는 javascript는 함수를 선언해 인스턴스하게 되면 this를 새로 만들기 때문인데,
            // arrow function은 인스턴스 하지 않고 사용하기 때문에 this를 새로 만들지 않고, 상속을 받는다.
            // created에 있는 this를 가지고 올 수 있기 때문이다. 그리하여 아래의 코드를 권장한다.

            // 개선 코드 -> .then( data => this.users = data);   
            ////   개선코드를 사용 할 시, const vm = this; 로 vm을 따로 선언하지 않아도 현재 vm의 this에 접근이 가능함.
        })
        .catch(er => {
            console.error(er);
        });
    },
}
</script>

<style scoped>
    .news-list{
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
    .news-title{
        margin: 0;
    }
    .link-text{
        color:gray;
    }
</style>

