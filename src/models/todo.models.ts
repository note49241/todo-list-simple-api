//import {} from 'class-validator'

export class CreateTodoModel {
  title: String;
  des: String;
  status: Number;
  group: String;
  createDate?: Date;
}

export class UpdateTodoModel {
  _id: String;
}

export class ParamTodoModel {
  group: String;
}

export class DeleteTodoModel {
  _id: String;
}
