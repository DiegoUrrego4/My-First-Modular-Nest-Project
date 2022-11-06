import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from '../interfaces/users.interface';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      uuid: uuid(),
      nombre: 'Diego',
      apellido: 'Urrego',
      email: 'diegoUrrego@mail.com',
    },
    {
      uuid: uuid(),
      nombre: 'Julián',
      email: 'julianLasso@mail.com',
    },
    {
      uuid: uuid(),
      nombre: 'John',
      apellido: 'Salazar',
      email: 'johnSalazar@mail.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOneById(uuid: string) {
    const user = this.users.find((user) => user.uuid === uuid);
    if (!user)
      throw new NotFoundException(`No existe un usario con uuid:${uuid}`);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      uuid: uuid(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
}
