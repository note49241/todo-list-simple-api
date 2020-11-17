import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import {
  CreateTodoModel,
  ParamTodoModel,
  UpdateTodoModel,
  DeleteTodoModel,
} from '../models/todo.models';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }

  @Post('create')
  async create(@Body(ValidationPipe) body: CreateTodoModel): Promise<any> {
    return await this.todoService.createTodoList(body);
  }

  @Get(':date')
  async list(@Param(ValidationPipe) date: ParamTodoModel): Promise<any> {
    return await this.todoService.todoList(date);
  }

  @Put('update/:id')
  async update(@Param(ValidationPipe) id: string): Promise<any> {
    return await this.todoService.updateTodoList(id);
  }

  @Delete('delete/:id')
  async delete(@Param(ValidationPipe) id: string): Promise<any> {
    return await this.todoService.deleteTodoList(id);
  }
}
