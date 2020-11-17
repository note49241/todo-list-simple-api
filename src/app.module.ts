import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import {todoSchema} from './schemas/todo.schemas'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todoList'),
    MongooseModule.forFeature([
      {name:'Todo', schema : todoSchema}
    ])
  ],
  controllers: [AppController,TodoController],
  providers: [AppService,TodoService],
})
export class AppModule {}
