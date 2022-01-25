<template>
  <div class="user">
        <app-create></app-create> <!--script에서 등록한 Calculate.vue 컴포넌트를 화면에 출력-->
  </div>
</template>

<script>
import CreateComponent from '../components/Create.vue'  //Create 컴포넌트 호출 -> Create.vue로 이동

export default {     //vue 객체 export
    components:{     //import한 컴포넌트들을 components에 등록
        'app-create': CreateComponent  //CalculateComponent를 'app-calculate'로 등록
  }
};
</script>