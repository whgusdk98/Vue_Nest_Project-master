import { Module } from '@nestjs/common';  //Module 호출
import { AppController } from './app.controller';   //AppController 호출 -> app.controller.ts로 이동
import { AppService } from './app.service';   //AppService 호출 -> app.service.ts로 이동
import { UserController } from './user/user.controller';    //UserController 호출 -> user/user.controller.ts로 이동
import { UserService } from './user/user.service';    //UserService 호출 -> user/user.service.ts로 이동
import { UserModule } from './user/user.module';    //UserModule 호출 -> user/user.module.ts로 이동
import { CalculatorController } from './calculator/calculator.controller';    //CalculatorController 호출 -> calculator/calculator.controller.ts로 이동
import { CalculatorService } from './calculator/calculator.service';    //CalculatorService 호출 -> calculator/calculator.service.ts로 이동
import { CalculatorModule } from './calculator/calculator.module';    //CalculatorModule 호출 -> calculator/calculator.module.ts로 이동

@Module({   // Module 정의 (@:Decorator 패턴으로써 클래스, 메서드 또는 속성에 대해 정의)
  imports: [UserModule, CalculatorModule],  //imports 모듈들 정의
  controllers: [AppController, UserController, CalculatorController], //controllers 컨트롤러들 정의
  providers: [AppService, UserService, CalculatorService],  //providers 서비스들 정의
})
export class AppModule {} //AppModule export
