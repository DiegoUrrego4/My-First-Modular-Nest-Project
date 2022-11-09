import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
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
