import './Input.css'
import {React, useState} from 'react'

export const Input = ({createTode}) => {
    const [task,setTask]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        createTode(task);
        setTask("")

    };
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Task" id="task" name="task" value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}
