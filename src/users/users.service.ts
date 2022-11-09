import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [
    {
      uuid: uuid(),
      name: 'Diego',
      lastname: 'Urrego',
      email: 'diegoUrrego@mail.com',
    },
    {
      uuid: uuid(),
      name: 'Julián',
      email: 'julianLasso@mail.com',
    },
    {
      uuid: uuid(),
      name: 'John',
      lastname: 'Granada',
      email: 'johnSalazar@mail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
