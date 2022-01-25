import { 
    Controller,
    Get,
    Res,
    Param,
    Post,
    Body,
    Query,
    HttpStatus
 } from '@nestjs/common';   //필요 라이브러리 호출
 import { UserService } from './user.service';  //UserService 호출 -> user.service.ts로 이동
 import { CreateUserDTO } from './dto/create_user_dto';  //CreateUserDTO 호출 -> dto/create_user_dto.ts로 이동


@Controller('user') // Controller 정의 endpoint: user
export class UserController {   //UserController 선언
    constructor(private UserService: UserService) {} //생성자 :UserService 생성

    @Get('users') //GET 요청시 실행
    async getUsers(@Res() res) { //getUsers 함수 실행
        const users = await this.UserService.getUsers();    //UserService의 getUsers 함수 호출
        return res.status(HttpStatus.OK).json(users);   //응답 반환
    }

    @Post('/post') //Post 요청시 실행
    async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO) {  //addUser 함수 실행
      const user = await this.UserService.addUser(CreateUserDTO);  //UserService의 addUser함수 호출한 후 변수에 저장
      return res.status(HttpStatus.OK).json({   //응답 반환
            message: "Post 요청 성공! \n"+CreateUserDTO.company+" "+CreateUserDTO.name+"님 안녕하세요",
            post: user
      })
    }
}
