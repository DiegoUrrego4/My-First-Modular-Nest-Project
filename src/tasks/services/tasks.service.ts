import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getSaludo(): string {
    return 'Hola desde el servicio Tasks';
  }
}
