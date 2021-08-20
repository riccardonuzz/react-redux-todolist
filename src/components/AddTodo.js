import React, { useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    addTodo: PropTypes.func
}

const AddTodo = ({
    addTodo
}) => {
    const [value, setValue] = useState('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            addNewTodo()
    }

    const addNewTodo = () => {
        if (value !== '') {
            addTodo(value);
            setValue('')
        }
    }

    const inputChangeHandler = (inputEvent) => {
        setValue(inputEvent.target.value);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="input-group" onKeyPress={handleKeyPress}>
                    <input type="text" value={value} onChange={inputChangeHandler} className="form-control" placeholder="Add a task..." aria-label="Add a task..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={addNewTodo} disabled={!value}>Add</button>
                    </span>
                </div>
            </div>
        </div>
    );
}


AddTodo.propTypes = propTypes
export default AddTodo

