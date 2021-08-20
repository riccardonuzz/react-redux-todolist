import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    nTodos: PropTypes.number,
    nCompleted: PropTypes.number
}

const Indicators = ({ nTodos = 0, nCompleted = 0 }) => {
    const percent = ((nCompleted / nTodos) * 100) || 0;

    const progressStyle = {
        width: `${percent}%`,
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mb-1">
                        <div className="card-body">
                            <h4 className="card-title">Completed tasks: {nCompleted}</h4>
                            <div className="progress mb-2">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow={percent}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={progressStyle}
                                >
                                    {percent.toFixed(1)}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-1">
                        <div className="card-body">
                            <h4 className="card-title">Total tasks</h4>
                            <p className="card-text">{nTodos}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

Indicators.propTypes = propTypes
export default Indicators
