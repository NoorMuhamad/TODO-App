import {React,useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useSelector} from 'react-redux'
import "./Input.css";
import "./List.css";
import { nestedAddTode,nestedRemoveTode,nestedUpdateTode } from "../redux/action";
import { useDispatch } from "react-redux";
import NTodo from "./NTodo";


const NestedList = ({id}) => {
  const state = useSelector((state) => ({ ...state }));
  

  const [nestedTask,setNestedTask]=useState("");
  const [date,setDate]=useState("");
  let dispatch = useDispatch();
  const handlenested=(e)=>{
    e.preventDefault();
    dispatch(nestedAddTode({id,nestedTask,date}));
    setDate("")
    setNestedTask("")
  }
  const outerID=id
  const update = (id, updateTask) => {
    dispatch(nestedUpdateTode({ id, updateTask,outerID }));
  };
  const finddata=state.todos.todos.find((val)=>val.id===id)
  return (
    <div>
      <form className="TodoInput" onSubmit={handlenested}>
        <input
          type="text"
          placeholder="Enter Your Task"
          id="task"
          name="task"
          value={nestedTask}
          onChange={(e)=> setNestedTask(e.target.value)}
        />
        <TextField
          id="date"
          type="date"
          value={date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setDate(e.target.value)}
        />
        <button>Add Task</button>
      </form>
      <div className="TodoList">
        <ul className="todo-list">
          <div className="listHead">
            <li>Name</li>
            <li>Date</li>
            <li>Edit</li>
            <li>Delete</li>
          </div>
          {
             
           finddata && finddata.nestedTask.map((nval)=>
            {
              return (  
                <NTodo
                  key={nval.id}
                  id={nval.id}
                  nestedTaskn={nval.nestedTaskn}
                  date={nval.date}
                  removeNTodo={() => dispatch(nestedRemoveTode({nval,id}))}
                  updateNTodo={update}
                />
             );
            
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default NestedList;
