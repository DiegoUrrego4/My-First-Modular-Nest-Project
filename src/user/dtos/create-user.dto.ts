import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly uuid?: string;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsOptional()
  readonly apellido?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
