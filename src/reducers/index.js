import { combineReducers } from 'redux';
import TodosReducer from './reducer_todos';
import CounterReducer from './reducer_counter';

const rootReducer = combineReducers({
  todos: TodosReducer,
  counter: CounterReducer
});

export default rootReducer;