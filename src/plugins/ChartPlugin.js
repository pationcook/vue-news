import Chart from 'chart.js/auto'

//이런 식으로 플러그인을 만들어 놓으면
//이제 각각의 chart.vue 들에서 일일히 chart를 임포트하지 않아도 된다.
//this.$customChart 로 접근
export default {
    install(app) {
        console.log('plugin module',app)
        app.config.globalProperties.$customChart = Chart;
    }
}