import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/views/Home';
import UserComponent from '@/views/User';
import CalculatorComponent from '@/views/Calculator';

Vue.use(Router) //router 기능 확장 선언

export default new Router({ //router 객체생성
  mode: 'history',  //라우터 '#'제거(UR이 변경될 때 페이지 다시 로드되게 가능)
  base: process.env.BASE_URL, //.js 앱이 배포되는 기본 경로
  routes: [ //경로들을 routes 배열에 추가
    { path: '/', redirect: { name: 'home' } },  //home으로 리다이랙트
    { path: '/home', name: 'home', component: HomeComponent },  //Home 컴포넌트 path 추가
    { path: '/user', name: 'user', component: UserComponent },  //User 컴포넌트 path 추가
    { path: '/calculator', name: 'calculator', component: CalculatorComponent }   //Calculator 컴포넌트 path 추가
  ]
});
