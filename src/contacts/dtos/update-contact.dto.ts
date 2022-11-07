import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateContactDto {
  @IsUUID()
  @IsOptional()
  usuarioUuid: string;
  @IsString()
  @IsOptional()
  nombre: string;
  @IsString()
  @IsOptional()
  apellidos?: string;
  @IsString()
  @IsOptional()
  telefono: string;
  @IsEmail()
  @IsOptional()
  correo: string;
}
