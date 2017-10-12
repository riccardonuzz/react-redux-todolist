import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markToDo, removeToDo } from '../actions/index';

import { Button,Tooltip, OverlayTrigger } from 'react-bootstrap';


class ToDo extends Component {
    constructor(props){
        super(props);

        this.markToDo = this.markToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
    }

    markToDo() {
        this.props.markToDo(this.props.id);
    }

    removeToDo() {
        this.props.removeToDo(this.props.id);
    }


    render() {

        let done = this.props.completed ? (<del>{this.props.text}</del>) : this.props.text;
        const delay = 1000;

        return (
           
            <li className="list-group-item">
                
                <div className="row">

                    <div className="col-1 col-lg-1">
                        <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">

                            <OverlayTrigger delayHide={delay} placement="top" overlay={(<Tooltip style={{opacity: "1"}} id="tooltip">Task completato.</Tooltip>)}>
                                <input type="checkbox" checked={this.props.completed} className="custom-control-input" onChange={this.markToDo}/>
                            </OverlayTrigger>
                            
                            <span className="custom-control-indicator"></span>
                        </label>
                        <div className="contaner">
                        
                        </div>
                    </div>

                    <div className="col-6 col-lg-6">
                        {done}
                    </div>
                    
                    <div className="col-4 col-lg-5 text-right">
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.removeToDo}>Elimina</button>
                    </div>
                </div>
            </li>            
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
            markToDo: bindActionCreators(markToDo, dispatch),
            removeToDo: bindActionCreators(removeToDo, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        //just taking the WHOLE state and picking up only the key "todos" (see the reducers/index)
        todos: state.todos,
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);