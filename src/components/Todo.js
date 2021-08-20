import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    name: PropTypes.string,
    completed: PropTypes.bool,

    deleteTodo: PropTypes.func,
    markTodoAsCompleted: PropTypes.func,
}

const Todo = ({
    id,
    name,
    completed,
    deleteTodo,
    markTodoAsCompleted
}) => {

    const markCurrentAsCompleted = () => {
        markTodoAsCompleted(id)
    }


    const done = completed ? (<del>{name}</del>) : name

    return (

        <li className="list-group-item">

            <div className="row">

                <div className="col-1 col-lg-1">
                    <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input type="checkbox" checked={completed} className="custom-control-input" onChange={markCurrentAsCompleted} />
                        <span className="custom-control-indicator"></span>
                    </label>
                    <div className="contaner">

                    </div>
                </div>

                <div className="col-6 col-lg-6">
                    {done}
                </div>

                <div className="col-5 col-lg-5 d-flex justify-content-end">
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTodo(id)}>Delete</button>
                </div>
            </div>
        </li>
    );
}

Todo.propTypes = propTypes
export default Todo
