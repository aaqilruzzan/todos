import React, { useState } from "react"

type Props={
    savetodo:(e:React.FormEvent,formData:ITodo|any)=> void
}


const addtodo: React.FC <Props>= ({savetodo})=>{

    const [formData,setformData]=useState<ITodo| {}>()

    const handledata = (e:React.FormEvent<HTMLInputElement>):void=>{

        setformData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
        }
        )
    }


    return(
        <form className="form" onSubmit={(e)=>savetodo(e,formData)} >
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handledata} id="name"></input>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="text" onChange={handledata} id="description"></input>
            </div>
        </div>
        <button disabled={formData===undefined? true:false}>Add Todo</button>
        </form>

    )
}

export default addtodo