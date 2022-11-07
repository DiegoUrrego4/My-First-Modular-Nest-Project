import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTaskDto {
  @IsUUID()
  @IsOptional()
  readonly uuid?: string;

  @IsUUID()
  readonly usuarioUuid?: string;

  @IsString()
  readonly tarea: string;
}
