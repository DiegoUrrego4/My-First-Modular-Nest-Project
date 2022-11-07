import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTaskPartiallyDto {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsUUID()
  @IsOptional()
  usuarioUuid?: string;

  @IsString()
  @IsOptional()
  tarea?: string;
}
