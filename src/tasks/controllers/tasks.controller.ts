import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get('message')
  getSaludo(): string {
    return this.tasksService.getSaludo();
  }
}
