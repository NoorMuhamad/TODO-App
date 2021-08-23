import * as types from './actionType'

export const completeTode =(todo)=>({
    type: types.COMPLETE_TODO,
    payload : todo,
});
export const addTode =(todo)=>({
    type: types.ADD_TODO,
    payload : todo,
});
export const removeTode =(todo)=>({
    type: types.REMOVE_TODO,
    payload : todo,
});
export const updateTode =(todo)=>({
    type: types.UPDATE_TODO,
    payload : todo,
});

export const nestedAddTode =(todo)=>({
    type: types.NESTEDADD_TODO,
    payload : todo,
});