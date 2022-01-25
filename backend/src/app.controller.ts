import { Controller, Get } from '@nestjs/common'; //Controller, Get 호출
import { AppService } from './app.service'; //AppService 호출 -> app.service.ts로 이동

@Controller() // Controller 정의: 요청(GET, POST등)을 처리하고 클라이언트에 응답 반환
export class AppController {  //AppController 선언
  constructor(private readonly appService: AppService) {} //생성자 :AppService 생성

  @Get()  //GET 정의
  getHello(): string {  //GET 함수 선언
    return this.appService.getHello();  //appService에 있는 getHello 함수 호출 후 반환
  }
}
