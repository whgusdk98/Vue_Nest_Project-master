import Vue from 'vue'
import App from './App.vue'
import router from './router'
//index.html 로드 된 후 제일 처음 실행
Vue.config.productionTip = false  //production tip 사용x

new Vue({ //Vue 객체 생성
  router, //router를 사용
  render: h => h(App),  //App 컴포넌트 rendering
}).$mount('#app') //index.html의 id값인 'app'를 선택하여 Vue의 컴포넌트들을 마운팅 시킴
