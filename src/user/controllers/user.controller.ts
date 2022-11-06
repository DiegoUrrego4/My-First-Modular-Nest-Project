import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }
  @Get(':uuid')
  getUser(@Param('uuid') id: string) {
    return this.usersService.findOneById(id);
  }
}
