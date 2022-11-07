import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateContactDto {
  @IsUUID()
  usuarioUuid: string;
  @IsString()
  nombre: string;
  @IsString()
  @IsOptional()
  apellidos?: string;
  @IsString()
  telefono: string;
  @IsEmail()
  correo: string;
}
