import axios, {AxiosResponse} from "axios"

const baseurl:string="http://localhost:4000"

export const gettodos= async ():Promise<AxiosResponse<ApiDataType>>=>{
    try{
   const todos:AxiosResponse<ApiDataType>= await axios.get(baseurl+"/todos")
   return todos
    }
    catch (error){
        throw new Error("An error occurred while fetching todos: " + error)
    }
}

export const addtodos= async (formData:ITodo):Promise<AxiosResponse<ApiDataType>>=>{
    try{
        const todo:Omit<ITodo,"_id">={
            name:formData.name,
            description:formData.description,
            status:false
        }
       
        const addtodo:AxiosResponse<ApiDataType>= await axios.post(baseurl+"/add-todo",todo)
        return addtodo

    } catch (error){
        throw new Error("An error occurred while adding todos: " + error)
    }
}

export const updateTodos= async (todo:ITodo):Promise<AxiosResponse<ApiDataType>>=>{
    try{
        
        const update:Pick<ITodo,"status">={
            status:true
        }
        
        const updatetodo:AxiosResponse<ApiDataType>= await axios.put(`${baseurl}/edit-todo/${todo._id}`,update)
        return updatetodo

    }
    catch (error){
        throw new Error("An error occurred while updating todos: " + error)
    }

}

export const deleteTodos= async (_id:string):Promise<AxiosResponse<ApiDataType>>=>{
    try{
        const deletedtodo:AxiosResponse<ApiDataType>= await axios.delete(`${baseurl}/delete-todo/${_id}`)
        return deletedtodo

    }
    catch(error){
        throw new Error ("An error occurred while deleting todos: " + error)
    }


}
