import { Response,Request } from "express";
import { ITodo } from "./types/todo";
import todo from "../../models/todo";


const getTodos =async (req:Request,res:Response):Promise<void> => {

    try{
        const todos: ITodo[] = await todo.find()
        res.status(200).json({message:"Success",status:"200 OK",todos:todos})
    } catch (error)   {
        throw error
    }
    
}

const addTodos= async (req:Request,res:Response):Promise<void> => {
    try{
        const body= req.body as Pick<ITodo, "name"|"description"|"status">
       

        const Todo:ITodo = new todo({
            name:body.name,
            description:body.description,
            status:body.status
        })

        const newTodo:ITodo= await Todo.save()
        const allTodos: ITodo[]=await todo.find()

        res.
        status(201)
        .json({message:"Todo added",status:"201 Created",todos:allTodos,todo:newTodo})


    } catch (error) {
        throw error
    }
}

const updateTodos=async (req:Request,res:Response):Promise<void> => {
    try{
        const {params:{id},
              body}=req
        
       
        
        const updatetodo:ITodo|null = await todo.findByIdAndUpdate(
            {_id:id},
            body
        )

      

        const allTodos:ITodo[]=await todo.find()

        res.
        status(200)
        .json({message:"Todo updated",todo:updatetodo,todos:allTodos})

    }  catch (error) {
        throw error
    }
    
}

const deleteTodos=async(req:Request,res:Response):Promise<void> => {
    try{

        const deletetodo:ITodo|null = await todo.findByIdAndRemove(
            req.params.id
        )

        const allTodos:ITodo[]=await todo.find()

        res.
        status(200)
        .json({message:"Todo deleted",todo:deletetodo,todos:allTodos})


    }catch (error){
        throw error
    }

}

export {getTodos,addTodos,updateTodos,deleteTodos}