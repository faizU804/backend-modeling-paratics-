import mongoose from 'mongoose'

const SubTodo = new mongoose.Schema({
  content : {
    type : String,
    required : true
  } ,
   complete : {
    type : Boolean,
    default : false
   } ,
    createdAt:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    }
},{timestamps : true})

export const SubTodo = mongoose.model("SubTodo" , SubTodo)