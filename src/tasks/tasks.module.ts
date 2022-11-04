import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';

@Module({
  controllers: [TasksController],
  exports: [TasksService],
  providers: [TasksService],
})
export class TasksModule {}
