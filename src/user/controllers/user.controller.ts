import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  getUser(@Param('uuid') uuid: string) {
    return this.usersService.findOneById(uuid);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':uuid')
  updateUser(
    @Param('uuid') uuid: string,
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.update(uuid, createUserDto);
  }
}
