import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // how we connect to other schema with refrence
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      //  inside the model name which is in third step we give that name in ref here for connection
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, //array of subtodos
    ],
  },
  { timestamps: true }
);

export const todo = mongoose.model('Todo', todoSchema);
