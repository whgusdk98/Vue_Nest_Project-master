import { Injectable } from '@nestjs/common';  //Injectable 호출

@Injectable() //해당 class가 의존성으로 주입(DI)될 수 있다고 정의
export class AppService { //AppService 선언
  getHello(): string {  //getHello함수 선언
    return 'Hello World!';  //반환
  }
}
