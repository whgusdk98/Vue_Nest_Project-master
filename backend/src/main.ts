import { NestFactory } from '@nestjs/core'; //NestFactory 호출
import { AppModule } from './app.module'; //AppModule 호출 -> app.module.ts로 이동

async function bootstrap() {  //비동기 함수 선언
  const app = await NestFactory.create(AppModule, {cors:true});  //AppModule을 통해 애플리케이션 전체에 모듈을 조립하고 필요한 클래스 생성하여 서버 실행
  await app.listen(3000); //포트 설정
}
bootstrap();  //함수 실행
