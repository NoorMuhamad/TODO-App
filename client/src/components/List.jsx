import "./List.css";
import { React, useState } from "react";
import Todo from "./Todo";
import { Input } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { addTode, removeTode, updateTode } from "../redux/action";
import NestedList from "./NestedList";
const List = () => {
  const state = useSelector((state) => ({ ...state }));
  const [active, setactive] = useState(false);
  const [id, setId]=useState("")
  let dispatch = useDispatch();
  const create = (newTodo) => {
    dispatch(addTode(newTodo));
  };
  const update = (id, updateTask) => {
    dispatch(updateTode({ id, updateTask }));
  };
  const data= (id,cas)=>{
    setId(id)
    setactive(cas)
  }
  return (
    <div className="part">
      <div className="TodoList">
        <Input createTode={create} />
        <ul className="todo-list">
          <div className="listHead">
            <li>Name</li>
            <div className="list2head">
              <li>Edit</li>
              <li>Delete</li>
            </div>
          </div>
          {state.todos.todos &&
            state.todos.todos.map((val) => {
              return (
               
                <Todo
                  key={val.id}
                  id={val.id}
                  task={val.task}
                  completed={val.completed}
                  toggleTodo={data}
                  removeTodo={() => dispatch(removeTode(val))}
                  updateTodo={update}
                />
              );
            })}
        </ul>
      </div>
      {active && <NestedList id={id} />}
    </div>
  );
};

export default List;
