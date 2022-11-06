import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
