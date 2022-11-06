import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsOptional()
  readonly apellido?: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
