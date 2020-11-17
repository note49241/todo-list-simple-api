import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { todoSchema } from '../schemas/todo.schemas';

import moment from 'moment';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private TodoCollection: Model) {}

  getHello(): string {
    return 'Hello World! todolist';
  }

  async createTodoList(body: any) {
    let saveTodo = this.TodoCollection(body);
    return saveTodo.save();
  }

  async todoList(date: any) {
    console.log(date.date);
    const query = await this.TodoCollection.find({ group: date.date });
    console.log(query);
    return query;
  }

  async updateTodoList(body: any): Promise<void> {
    var mongoose = require('mongoose');
    const query = await this.TodoCollection.findOne(
      mongoose.Types.ObjectId(body.id),
    );
    if (query != null) {
      query.status = 10;
      return await query.save();
    } else {
      throw new BadRequestException(`Invalid Account Id`);
    }
  }

  async deleteTodoList(data: any): Promise<void> {
    var mongoose = require('mongoose');
    let id = mongoose.Types.ObjectId(data.id);
    console.log(id);
    const query = await this.TodoCollection.findOneAndDelete({ _id: id });
  }
}
