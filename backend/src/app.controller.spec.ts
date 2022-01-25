//컨트롤러를 위한 유닛 테스트
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller'; //app.controller.ts 호출
import { AppService } from './app.service'; //app.service.ts 호출

describe('AppController', () => { //AppController 선언
  let appController: AppController; //AppController 변수 지정

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {//root 선언
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
