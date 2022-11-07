import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../dtos';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('message')
  getSaludo() {
    return this.usersService.getSaludo();
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

  @Patch(':uuid')
  partiallyUpdateUser(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.partiallyUpdate(uuid, updateUserDto);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string) {
    this.usersService.delete(uuid);
  }
}
