import { useEffect } from "react"
import PropTypes from 'prop-types'

const style = {
    display: 'inherit',
    position: 'fixed',
    top: 30,
    right: 10
}

const propTypes = {
    setShow: PropTypes.func
}

const TodoAddedNotification = ({ setShow }) => {

    useEffect(() => setTimeout(() => setShow(false), 2000), [setShow])

    return (
        <div style={style} className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    Successfully added a new task to the list.
                </div>
                <button onClick={() => setShow(false)} type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
            </div>
        </div>
    )
}


TodoAddedNotification.propTypes = propTypes
export default TodoAddedNotification
