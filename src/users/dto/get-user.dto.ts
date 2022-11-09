import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class GetUserDto implements UserInterface {
  @IsUUID()
  uuid: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
