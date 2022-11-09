import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { OutLastnameGet, OutCreateUpdateLastname } from './interceptors';

@Controller('user')

// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(OutCreateUpdateLastname)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseInterceptors(OutLastnameGet)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  @UseInterceptors(OutLastnameGet)
  findOne(@Param('uuid') uuid: string) {
    return this.usersService.findOne(uuid);
  }

  @Put(':uuid')
  @UseInterceptors(OutCreateUpdateLastname)
  updateAll(@Param('uuid') uuid: string, @Body() createUserDto: CreateUserDto) {
    return this.usersService.update(uuid, createUserDto);
  }

  @Patch(':uuid')
  @UseInterceptors(OutCreateUpdateLastname)
  update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(uuid, updateUserDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.usersService.remove(uuid);
  }
}
