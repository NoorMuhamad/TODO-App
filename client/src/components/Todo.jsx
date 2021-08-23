import "./Todo.css";
import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";


const Todo = ({ completed, task, toggleTodo, id, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleupdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };
 

  return (
      <div className={completed ? "Todo completed" : "Todo"}>
        {isEditing ? (
          <form className="Todo-edit-form" onSubmit={handleupdate}>
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button>update</button>
          </form>
        ) : (
          <li className="Todo-task" onClick={()=>toggleTodo(id,"true")}>
            {task}
          </li>
        )}

        <div className="Todo-buttons">
          <Edit onClick={() => setIsEditing(true)} />
          <Delete onClick={removeTodo} />
        </div>
      </div>
    
  );
};

export default Todo;
