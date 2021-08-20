import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            completed: PropTypes.bool
        })
    ),
    deleteTodo: PropTypes.func,
    markTodoAsCompleted: PropTypes.func
}

const List = ({ todos = [], deleteTodo, markTodoAsCompleted }) => {
    const listItems = todos.map((todo) => (
        <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}

            deleteTodo={deleteTodo}
            markTodoAsCompleted={markTodoAsCompleted}
        />
    ));

    return (
        <>
            { todos.length ?
                <ul className="list-group">
                    {listItems}
                </ul> :

                <p className='text-black-50'>No things todo available, add one by typing on the above field ⬆️</p>
            }
        </>
    );
}

List.propTypes = propTypes;
export default List;