import { ADD_TODO, DELETE_TODO, MARK_TODO } from "./todos.action.types";

export const addTodo = (name) => ({
    type: ADD_TODO,
    payload: name
});

export const markTodo = id => ({
    type: MARK_TODO,
    payload: { id }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
});