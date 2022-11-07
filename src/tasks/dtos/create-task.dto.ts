import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Task } from '../interfaces/tasks.interface';

export class CreateTaskDto implements Task {
  @IsUUID()
  @IsOptional()
  readonly uuid?: string;

  @IsUUID()
  @IsOptional()
  readonly usuarioUuid?: string;

  @IsString()
  readonly tarea: string;
}
