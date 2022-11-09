import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { v4 as uuid } from 'uuid';
import { UserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements UserInterface {
  @IsUUID()
  uuid: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsEmail()
  email: string;
}
