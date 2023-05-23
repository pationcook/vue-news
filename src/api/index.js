

// 해당 js 를 이렇게 따로 만들어서 api 모음집을 만드는 이유 
// 1. 만약 각 화면 (view.vue)에 api들을 처리하게 되면 계속 axios 라이브러리를 불러오게 되므로 해당 axios 호출 반복회수를 줄일수 있다.
// 2. 중복코딩을 줄일 수 있다. axios.get('https://api.hnpwa.com/v0') 까지는 중복되어있다.
//
import axios  from 'axios';

    const config = {
        baseUrl : 'https://api.hnpwa.com/v0'
    }

    //람다식
    const newsList = () => {
        return axios.get(config.baseUrl+'/news/1.json');
    }

    //함수
    function jobsList() {
        return axios.get(config.baseUrl+'/jobs/1.json');
    }

    //람다식 + 리트럴 문법
    const askList = () => {
        return axios.get(`${config.baseUrl}/jobs/1.json`);
    }

    const userList = (userName ) => {
        return axios.get(`${config.baseUrl}/user/${userName}.json`);
    }

export {
    newsList,
    jobsList,
    askList,
    userList
}