import { combineReducers } from "redux";
import todos from '../features/todos/todos.reducer'

export default combineReducers({ todos });