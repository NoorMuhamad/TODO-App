import './Input.css'
import {React, useState} from 'react'
import { v4 as uuidv4 } from "uuid";

export const Input = ({createTode}) => {
    const [task,setTask]=useState("");
    const newTodo = {
        id: uuidv4(),
        task: task,
        nestedTask: [],
        completed: false,
      }
    const handleSubmit =(e)=>{
        e.preventDefault();
        createTode(newTodo);
        setTask("")

    };
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Task" id="task" name="task" value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}
