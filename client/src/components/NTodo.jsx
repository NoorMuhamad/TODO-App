import {React,useState} from "react";
import { Delete, Edit } from "@material-ui/icons";
import "./Todo.css";

const NTodo = ({ nestedTaskn, date, removeNTodo,updateNTodo,id  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(nestedTaskn);
    const handleupdate = (e) => {
        e.preventDefault();
        updateNTodo(id, editTask);
        setIsEditing(false);
      };
  return (
    <div className="listHead">
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
        <>
          <li>{nestedTaskn}</li>
          <li>{date}</li>
        </>
      )}

      <li>
        <Edit onClick={() => setIsEditing(true)}/>
      </li>
      <li>
        <Delete onClick={removeNTodo} />
      </li>
    </div>
  );
};

export default NTodo;
