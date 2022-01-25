<template>
  <div class="calculator">
    <app-calculate></app-calculate> <!--script에서 등록한 Calculate.vue 컴포넌트를 화면에 출력-->
  </div>
</template>

<script> //script 시작
import CalculateComponent from '../components/Calculate.vue'    //Calculate 컴포넌트 호출 -> Calculate.vue로 이동

export default { //vue 객체 export
  components:{  //import한 컴포넌트들을 components에 등록
    'app-calculate': CalculateComponent,  //CalculateComponent를 'app-calculate'로 등록
  }
};
</script>
