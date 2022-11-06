import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from '../interfaces/users.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

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
      apellido: 'Granada',
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

  updateDBUser(uuid: string, userToUpdate: User) {
    let existedUser = this.findOneById(uuid);

    this.users = this.users.map((user) => {
      if (user.uuid === uuid) {
        existedUser = { ...existedUser, ...userToUpdate, uuid };
        return existedUser;
      }
      return user;
    });
    return existedUser;
  }

  update(uuid: string, createUserDto: CreateUserDto) {
    return this.updateDBUser(uuid, createUserDto);
  }

  partiallyUpdate(uuid: string, updateUserDto: UpdateUserDto) {
    return this.updateDBUser(uuid, updateUserDto);
  }
}
