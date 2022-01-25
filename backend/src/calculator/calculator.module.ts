import { Module } from '@nestjs/common';  //Module 호출
import { CalculatorController } from './calculator.controller';   //CalculatorController 호출 -> calculator/calculator.controller.ts로 이동
import { CalculatorService } from './calculator.service';  //CalculatorService 호출 -> calculator/calculator.service.ts로 이동

@Module({// Module 정의 
  controllers: [CalculatorController],  //controllers 컨트롤러 정의
  providers: [CalculatorService]   //providers 서비스 정의
})
export class CalculatorModule {}  //CalculatorModule export
