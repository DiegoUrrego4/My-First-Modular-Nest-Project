import { Injectable, NotFoundException } from '@nestjs/common';
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
      lastname: 'Lasso',
      email: 'julianLasso@mail.com',
    },
    {
      uuid: uuid(),
      name: 'John',
      email: 'johnSalazar@mail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(uuid: string) {
    const user = this.users.find((user) => user.uuid === uuid);
    if (!user)
      throw new NotFoundException(`No se encontró un usuario con uuid:${uuid}`);
    return user;
  }

  update(uuid: string, updateUserDto: UpdateUserDto) {
    let userDb = this.findOne(uuid);
    this.users = this.users.map((user) => {
      if (user.uuid === uuid) {
        userDb = { ...userDb, ...updateUserDto, uuid };
        return userDb;
      }
      return user;
    });
    return userDb;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} user`;
  }
}
