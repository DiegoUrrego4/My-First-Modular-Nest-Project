import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { UserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements UserInterface {
  @IsUUID()
  uuid?: string = uuid();

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
