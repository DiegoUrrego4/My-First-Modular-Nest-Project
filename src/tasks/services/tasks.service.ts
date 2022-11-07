import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto, UpdateTaskDto, UpdateTaskPartiallyDto } from '../dtos';
import { Task } from '../interfaces/tasks.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      tarea: 'Terminar Teachign Path Nest',
    },
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      tarea: 'Estudiar React Native',
    },
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      tarea: 'Bailar de la felicidad popr recibir una Mac',
    },
  ];

  getSaludo() {
    return 'Hola desde Tasks Service';
  }

  findAll() {
    return this.tasks;
  }

  findOneById(uuid: string) {
    const task = this.tasks.find((task) => task.uuid === uuid);
    if (!task)
      throw new NotFoundException(`No existe una tarea con uuid:${uuid}`);
    return task;
  }

  create(createTaskDto: CreateTaskDto) {
    const newTask = {
      uuid: uuid(),
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateDBTask(uuid: string, taskToUpdate: Task) {
    let existedTask = this.findOneById(uuid);

    this.tasks = this.tasks.map((task) => {
      if (task.uuid === uuid) {
        existedTask = { ...existedTask, ...taskToUpdate, uuid };
        return existedTask;
      }
      return task;
    });
    return existedTask;
  }

  update(uuid: string, updateTaskDto: UpdateTaskDto) {
    return this.updateDBTask(uuid, updateTaskDto);
  }

  partiallyUpdate(
    uuid: string,
    updateTaskPartiallyDto: UpdateTaskPartiallyDto,
  ) {
    return this.updateDBTask(uuid, updateTaskPartiallyDto);
  }

  delete(uuid: string) {
    this.findOneById(uuid);
    this.tasks = this.tasks.filter((user) => user.uuid !== uuid);
  }
}
