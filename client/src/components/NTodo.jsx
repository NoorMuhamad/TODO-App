import React from 'react'
import { Delete, Edit } from "@material-ui/icons";
import "./Todo.css";

const NTodo = ({nestedTask,date}) => {
    return (
        <div className="listHead">
            <li>{nestedTask}</li>
            <li>{date}</li>
            <li><Edit/></li>
            <li><Delete/></li>
          </div>
    )
}

export default NTodo
