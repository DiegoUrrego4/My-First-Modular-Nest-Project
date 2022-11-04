import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}
  @Get('message')
  getSaludo(): string {
    return this.usersService.getSaludo();
  }
}
