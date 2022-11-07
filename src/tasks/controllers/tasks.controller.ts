import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDto, UpdateTaskDto, UpdateTaskPartiallyDto } from '../dtos';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.findAll();
  }

  @Get('message')
  getSaludo(): string {
    return this.tasksService.getSaludo();
  }

  @Get(':uuid')
  getTarea(@Param('uuid') uuid: string) {
    return this.tasksService.findOneById(uuid);
  }

  @Post()
  createUser(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':uuid')
  updateUser(
    @Param('uuid') uuid: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(uuid, updateTaskDto);
  }

  @Patch(':uuid')
  partiallyUpdateUser(
    @Param('uuid') uuid: string,
    @Body() updateTaskPartiallyDto: UpdateTaskPartiallyDto,
  ) {
    return this.tasksService.partiallyUpdate(uuid, updateTaskPartiallyDto);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string) {
    this.tasksService.delete(uuid);
  }
}
