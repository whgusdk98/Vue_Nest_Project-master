import { Module } from '@nestjs/common';  //Module 호출
import { UserController } from './user.controller';   //UserController 호출 -> user/user.controller.ts로 이동
import { UserService } from './user.service';    //UserService 호출 -> user/user.service.ts로 이동

@Module({ // Module 정의
  controllers: [UserController],   //controllers 컨트롤러 정의
  providers: [UserService]   //providers 서비스 정의
})
export class UserModule {}  //UserModule export
