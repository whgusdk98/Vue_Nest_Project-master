import { Injectable } from '@nestjs/common';    //Injectable 호출
import { NumberDTO } from './dto/number_dto'    //NumberDTO 호출 -> dto/number_dto.ts로 이동

@Injectable() //해당 class가 의존성으로 주입(DI)될 수 있다고 정의
export class CalculatorService {    //CalculatorService 선언
    numDTO = NumberDTO  //NumberDTO형식의 numDTO 변수 생성

    add(numDTO): Promise<any> {  //add 함수 선언
        console.log(numDTO); //콘솔에 NumberDTO 출력
        return new Promise(resolve => { //콜백함수 성공 시 반환
            let sum;    //sum 변수 선언
            sum = Number(numDTO.number1) + Number(numDTO.number2);  //두 개 숫자 더하기
            console.log(sum); //콘솔에 sum 출력
            resolve(sum); //성공: sum 반환
          });
    }
}
