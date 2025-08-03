import mongoose from 'mongoose'

const userTodo = new mongoose.Schema({
  content : {
    type : String,
    required : true
  },
  complete : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "SubTodo"
    }
    // refrence to connect with sub todos
  ]
},{timestamps : true})

export const Todo = new mongoose.model("Todo" , userTodo)