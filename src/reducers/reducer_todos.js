
export default function (state= [], action) {
  console.log('Action received', action);

  switch (action.type) {
    case 'TODO_ADDED':
      return [...state, action.payload];

    case 'TODO_MARKED':
      return state.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo);

    case 'TODO_REMOVED':
    console.log(state);
      return state.filter((element) => {
          return element.id != action.payload
      });

  
  }
  
  return state;
}