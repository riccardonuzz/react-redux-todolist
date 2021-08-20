import React, { useState } from 'react';

import AddTodo from '../components/AddTodo';
import Header from '../components/Header';
import List from '../components/List';
import Indicators from '../components/Indicators';
import TodoAddedNotification from '../components/TodoAddedNotification';

import { connect } from 'react-redux';
import { addTodo, markTodo, deleteTodo } from '../features/todos/todos.actions';

const App = ({ todos, addTodo, markTodo, deleteTodo }) => {
    const [showNotification, setShowNotification] = useState(false)


    /**
     * 
     * @param {string} name 
     */
    const addTodoAndShowNotification = (name) => {
        addTodo(name)
        setShowNotification(true)
    }

    /**
     * 
     * @returns {{
     *    id: number | string,
     *    name: string,
     *    completed: boolean
     * }}
     */
    const getCompletedTodos = () => {
        return todos.reduce((n, todo) => n + (todo.completed), 0)
    }


    return (
        <div>
            <Header />
            <br />
            <Indicators nCompleted={getCompletedTodos()} nTodos={todos.length} />
            <br />
            <div className="container">
                <AddTodo addTodo={addTodoAndShowNotification} />
                <br />
                <List deleteTodo={deleteTodo} todos={todos} markTodoAsCompleted={markTodo} />
                <br />
            </div>
            {showNotification && <TodoAddedNotification setShow={setShowNotification} />}
        </div>
    );

}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, {
    addTodo,
    deleteTodo,
    markTodo
})(App)
