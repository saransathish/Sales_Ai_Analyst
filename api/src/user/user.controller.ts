import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(
    private userservice: UserService){}

    @Get()
  @ApiCreatedResponse()
  findAll() {
    return this.userservice.getallusers();
  }
}


