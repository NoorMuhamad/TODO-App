import * as types from "./actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NESTEDADD_TODO:
     const nadd= state.todos.map((obj) => {
        if (obj.id === action.payload.id) {
          const newobj = {
            id: uuidv4(),
            nestedTaskn: action.payload.nestedTask,
            date: action.payload.date,
          };
          obj.nestedTask.push(newobj);
        }
        return obj
      });
      return { ...state , todos:nadd};
    case types.NESTEDREMOVE_TODO:
      const nre=state.todos.map((obj)=>{
        if(obj.id===action.payload.id){
          obj.nestedTask=obj.nestedTask.filter((t)=> t.id !== action.payload.nval.id)
        }
        return obj
      })
      return {
        ...state,
        todos:nre,
      };
      case types.NESTEDUPDATE_TODO:
        const nup=state.todos.map((obj)=>{
          if(obj.id===action.payload.outerID){
            obj.nestedTask.map((nobj)=>{
              if(nobj.id===action.payload.id){
                nobj.nestedTaskn=action.payload.updateTask
              }
              return nobj
            })
          }
          return obj
        })
      return {
        ...state,
        todos:nup
      };
    case types.ADD_TODO_SAGA:
      const addTodo = [...state.todos, action.payload];
      return {
        ...state,
        todos: addTodo,
      };
    case types.REMOVE_TODO_SAGA: {
      const removeTodo = state.todos.filter((t) => t.id !== action.payload);
      return {
        ...state,
        todos: removeTodo,
      };
    }
    case types.UPDATE_TODO_SAGA: {
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
