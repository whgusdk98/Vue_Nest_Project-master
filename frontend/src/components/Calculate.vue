<template>
   <div>
        <div class="form-wrapper">  <!--form 공간 구분-->
          <h2> Calculate Two Number </h2>
          <form id="calculator-form" @submit.prevent="createNum">   <!--submit 이벤트 발생 시 createNum메소드 실행 및 form 자동 넘김 방지 -->
               <div class="edit-text">
                <label for="number1"> number1 </label>  <!--첫 번째 숫자 label 지정-->
                <input type="number" id="number1" v-model="number1" name="number1" class="form-control" placeholder="Enter number1"> <!-- 첫 번째 숫자 input 받는 부분-->
               </div>
               <div>+</div>
              <div class="edit-text">
                <label for="number2"> number2 </label>  <!--두 번째 숫자 label 지정-->
                <input type="number" id="number2" v-model="number2" name="number2" class="form-control" placeholder="Enter number2"> <!-- 첫 번째 숫자 input 받는 부분-->
               </div>
              <div class="submit-button">   
                  <button class="btn btn-success" type="submit"> Sum Numbers </button>  <!-- submit 버튼-->
              </div> 
          </form>
          <h3> Result </h3>
        <div id="result" class="form-wrapper">   <!--결과 출력 div-->
            <xmp> {{ result }} </xmp>    <!--http response로 받은 result 결과 출력-->
            <xmp> {{ result2 }} </xmp>   <!--http response로 받은 결과 조합 출력-->
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";  //axios 라이브러리 호출
import { server } from "@/utils/helper";    //utils파일에 등록한 서버 baseURL호출 -> utils/helper.js 이동

export default {    //vue 객체 export
    data() {    //vue 객체 내부적으로 사용하는 변수 선언
        return {    
        number1: 0,    //입력 받을 첫번째 숫자 변수 선언
        number2: 0,    //입력 받을 두번째 숫자 변수 선언
        sum: 0,
        result: null,        //결과 저장할 변수 선언
        result2: null
        };
    },
    methods: {  //vue 내부 메소드 선언
        createNum() {   //숫자 저장할 객체 생성함수 선언
        let postData = {    //post할 data 객체 선언
            number1: this.number1,  //첫번째 숫자 초기화
            number2: this.number2   //두번째 숫자 초기화
        };
        this.__submitToServer(postData);    //서버에 전송하는 함수 호출, 숫자 객체 전달
        },
        __submitToServer(data) {    //서버 전송함수 선언
        axios.post(`${server.baseURL}/calculator/add`, data).then(response => {     // http post 요청: 서버 해당 URL에 data형식으로 데이터보냄 -> backend/main.js로 이동
            console.log(response)           //콘솔에 로그 출력
            this.result = response.data.message     //http response 전달 받아서 result에 저장(html에서 {{result}} 로 화면에 출력)
            this.number1 = response.data.data.num1
            this.number2 = response.data.data.num2
            this.sum = response.data.data.sum
            this.result2 = this.number1 + ' + ' + this.number2 + ' = ' + this.sum
        });
        }
    }
};
</script>

