import * as types from "./actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NESTEDADD_TODO:
      state.todos.map((obj)=>{
        if(obj.id===action.payload.id){
          const newobj={
            id:uuidv4(),
            nestedTask:action.payload.nestedTask,
            date:action.payload.date
          }
          obj.nestedTask.push(newobj)
        }
      })
    return {...state}

    case types.ADD_TODO:
    
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        nestedTask:[],
        completed: false,
      };
      const addTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addTodo,
      };
    case types.REMOVE_TODO: {
      const removeTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: removeTodo,
      };
    }
    case types.UPDATE_TODO: {
      const updateTodo = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, task: action.payload.updateTask };
        }
        return t;
      });
      return {
        ...state,
        todos: updateTodo,
      };
    }
    case types.COMPLETE_TODO:
      const toggleTodo = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodo,
      };
    default:
      return state;
  }
};

export default todosReducer;
