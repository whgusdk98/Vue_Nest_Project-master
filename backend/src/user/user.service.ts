import { Injectable, HttpException } from '@nestjs/common'; //Injectable 호출
import { CreateUserDTO } from './dto/create_user_dto' //CreateUserDTO 호출 -> dto/create_user_dto.ts로 이동

@Injectable() //해당 class가 의존성으로 주입(DI)될 수 있다고 정의
export class UserService {  //UserService 선언
    user = CreateUserDTO;   //CreateUserDTO형식의 user 변수 생성

    getUsers(): Promise<any> {  //getUsers 함수 선언
        return new Promise(resolve => { //콜백함수 성공 시 user 반환
          resolve(this.user); //성공: user 반환
        });
    }

    addUser(user): Promise<any> { //addUsers 함수 선언
        console.log(user);  //콘솔에 user 출력
        return new Promise(resolve => { //콜백함수: 성공 시 user 반환
          //this.user;  //현재 사용자
          resolve(this.user); //성공: user 반환
        });
      }
}
