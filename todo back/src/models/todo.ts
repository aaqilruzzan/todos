import { ITodo } from "../controllers/todos/types/todo";
import { model,Schema } from "mongoose";

const todoSchema : Schema = new Schema (
    {
        name:{
            type:String,
            required:true,
        },

        description:{
            type:String,
            required:true,
        },

        status: {
            type:Boolean,
            required:true,
        },

    },
    {timestamps: true,
    useFindAndModify: false }
)

export default model<ITodo> ("Todo",todoSchema)

