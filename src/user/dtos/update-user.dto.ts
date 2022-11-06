import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly uuid?: string;

  @IsString()
  @IsOptional()
  readonly nombre?: string;

  @IsString()
  @IsOptional()
  readonly apellido?: string;

  @IsString()
  @IsOptional()
  readonly email?: string;
}
