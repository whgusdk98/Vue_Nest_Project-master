import {     
    Controller,
    Get,
    Res,
    Param,
    Post,
    Body,
    Query,
    HttpStatus 
} from '@nestjs/common';  //필요 라이브러리 호출
import { CalculatorService } from './calculator.service'; //CalculatorService 호출 -> calculator.service.ts로 이동
import { NumberDTO } from './dto/number_dto'; //NumberDTO 호출 -> dto/number_dto.ts로 이동

@Controller('calculator') // Controller 정의 endpoint: calculator
export class CalculatorController {  //CalculatorController 선언
    constructor(private CalculatorService: CalculatorService) {}  //생성자 :CalculatorService 생성

    @Post('/add') //Post 요청시 실행
    async add(@Res() res, @Body() NumberDTO: NumberDTO) {   //add 함수 실행
      const add_num = await this.CalculatorService.add(NumberDTO);  //CalculatorService add함수 호출 후 저장
      return res.status(HttpStatus.OK).json({ //응답 반환
            message: "Post 요청, Sum 성공! \n"+NumberDTO.number1+" + "+NumberDTO.number2+" = "+add_num+" 입니다.",
            data: {
                num1: NumberDTO.number1,
                num2: NumberDTO.number2,
                sum: add_num
                } 
      })
    }
}
