<template>
   <div>
        <div class="form-wrapper"> <!--form 공간 구분-->
          <h2> Create User </h2>
          <form id="create-user-form" @submit.prevent="createUser">  <!--submit 이벤트 발생 시 createUser 메소드 실행 및 form 자동 넘김 방지 -->
               <div class="edit-text">
                <label for="name"> name </label>  <!--name label 지정-->
                <input type="text" id="name" v-model="name" name="name" class="form-control" placeholder="Enter name"> <!-- 이름 input 받는 부분-->
               </div>
              <div class="edit-text">
                <label for="company"> company </label> <!--company label 지정-->
                <input type="text" id="company" v-model="company" name="company" class="form-control" placeholder="Enter company"> <!-- 회사 input 받는 부분-->
               </div>
              <div class="submit-button">
                  <button class="btn btn-success" type="submit"> Create User </button> <!-- submit 버튼-->
              </div> 
          </form>
          <h3> Result </h3>
        <div id="result" class="form-wrapper">   <!--결과 출력 div-->
            <xmp> {{ result }} </xmp> <!--http response로 받은 result 결과 출력-->
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";  //axios 라이브러리 호출
import { server } from "@/utils/helper";   //utils파일에 등록한 서버 baseURL호출 -> utils/helper.js 이동

export default {  //vue 객체 export
  data() {    //vue 객체 내부적으로 사용하는 변수 선언
    return {
      name: "",       //입력 받을 이름 변수 선언
      company: "",    //입력 받을 회사 변수 선언
      result: null        //결과 저장할 변수 선언
    };
  },
  methods: { //vue 내부 메소드 선언
    createUser() {  //사용자 정보 저장할 객체 생성함수 선언
      let postData = { //post할 data 객체 선언
        name: this.name,  //이름 초기화
        company: this.company   //회사 초기화
      };
      this.__submitToServer(postData);   //서버에 전송하는 함수 호출, 숫자 객체 전달
    },
    __submitToServer(data) {   //서버 전송함수 선언
      axios.post(`${server.baseURL}/user/post`, data).then(response => {      // http post 요청: 서버 해당 URL에 data형식으로 데이터보냄 -> backend/main.js로 이동
        console.log(response)         //콘솔에 로그 출력
        this.result = response.data.message   //http response 전달 받아서 result에 저장(html에서 {{result}} 로 화면에 출력)
      });
    }
  }
};
</script>

