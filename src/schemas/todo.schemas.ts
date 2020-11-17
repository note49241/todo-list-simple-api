import {Schema} from 'mongoose' 

export const todoSchema = new Schema({
    title:String,
    des:String,
    status:Number,
    group:String,
    createDate:Date,
},{toObject:{virtuals:true}})