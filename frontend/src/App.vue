<template>
  <div id="app">  <!--id값이 app인 공간 구분 태그-->
    <div id="nav">  <!--id값이 nav인 공간 구분 태그-->
      <router-link to="/">Home</router-link> |  <!--화면에 Home 출력 및 '/'라우터 링크 생성: 클릭 시 Home.vue이동-->
      <router-link to="/user">User</router-link> | <!--화면에 User 출력 및 '/user'라우터 링크 생성: 클릭 시 User.vue이동-->
      <router-link to="/calculator">Calculator</router-link> <!--화면에 Calculator 출력 및 '/calculator'라우터 링크 생성: 클릭 시 Calculator.vue이동-->
    </div>
    <router-view/>  <!--페이지의 url이 이동했을 때 그 범위내에서 뿌려주는 태그-->
  </div>
</template>

<style>
#app {  /* app div 스타일 지정 */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav { /* nav div 스타일 지정 */
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

