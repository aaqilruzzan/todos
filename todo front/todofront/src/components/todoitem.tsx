import React from "react"

type Props= TodoProps & {
    updateTodo:(todo:ITodo) => void
    deleteTodo:(_id:string) => void
}


const todoitem:React.FC <Props>=({todo,updateTodo,deleteTodo})=>{
    const checktodo:string=todo.status?"line-through":""
    return(
        <div className="card">
            <div className="card-text">
                <h1 className={checktodo}>{todo.name}</h1>
                <span className={checktodo}>{todo.description}</span> 
            </div>
            <div className="card-buttons">
                 <button className={todo.status?"hide-button":"complete-button"}
                onClick={()=>updateTodo(todo)}>
                Complete
                </button> 
                
                <button className="delete-button"
                onClick={()=>deleteTodo(todo._id)}>
                Delete
                </button> 

               
            </div>

        </div>


    )

}

export default todoitem