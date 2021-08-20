import {
    ADD_TODO,
    MARK_TODO,
    DELETE_TODO
} from './todos.action.types'


const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const id = state.length ? (state[state.length - 1].id + 1) : 1

            return [
                ...state,
                {  id, name: action.payload, completed: false }
            ];
        }

        case DELETE_TODO: {
            const { id } = action.payload;
            return [
                ...state.filter(todo => todo.id !== id)
            ]
        }

        case MARK_TODO: {
            const { id } = action.payload;
            return [
                ...state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
            ]
        }

        default:
            return state;
    }
}

export default todosReducer;