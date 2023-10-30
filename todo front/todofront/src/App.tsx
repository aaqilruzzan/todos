import { useEffect, useState } from "react"
import Addtodo from "./components/addtodo"
import Todoitem from "./components/todoitem"
import { gettodos,addtodos,updateTodos,deleteTodos } from "./API"
import React from "react"


const app:React.FC= ()=>{
    const[todos,settodos]=useState<ITodo[]>([])


    useEffect(()=>{
        fetchtodos()
    },[]
    )


    const fetchtodos =():void=>{
        gettodos().then(({data:{todos}}:ITodo[]|any)=>{
            settodos(todos)
        })
        .catch((error:Error)=>{
            console.log(error)
        }
        )

    }

    const handlesavetodo=(e:React.FormEvent,formData:ITodo):void=>{
        e.preventDefault()
        addtodos(formData)
        .then(({status,data})=>{
            if(status!==201){
                throw new Error("Error occured todo not saved")
            }
            settodos(data.todos)
        }
        )
        .catch(err=>console.log(err))
    }


    const handleupdatetodo=(todo:ITodo):void=>{
        updateTodos(todo).
        then(({status,data})=>{
            if(status!=200){
                throw new Error("Error todo not updated")
            }
            settodos(data.todos)
        })
        .catch(err=>console.log(err))
    }

    const handledeletetodo=(_id:string):void=>{
        deleteTodos(_id).
        then(({status,data})=>{
            if(status!=200){
                throw new Error("Error todo not deleted")
            }
            settodos(data.todos)
        })
        .catch(err=>console.log(err))
    }

    return(
        <main className="App">
            <h1>My Todos</h1>
            <Addtodo savetodo={handlesavetodo}/>
            {todos.map( (todo:ITodo) =>(
                <Todoitem
                key={todo._id}
                updateTodo={handleupdatetodo}
                deleteTodo={handledeletetodo}
                todo={todo}/>
            )

            )}
        </main>
    )
}
export default app