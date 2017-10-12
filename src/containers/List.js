import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDo from './ToDo';

class List extends Component {
    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
        
    }


    getList = () => {
        return this.props.todos.map(element => {
            return (
                <ToDo
                    key={element.id}
                    id={element.id}
                    completed={element.completed}
                    text={element.text}
                />
            );
        });
    } 


    render() {
        if(this.getList().length==0){
            return (
                <div>
                    Nessun elemento presente nella lista.
                </div>
            );
        }

        return (
            <ul className="list-group">
                {this.getList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        //just taking the WHOLE state and picking up only the key "counter" (see the reducers/index)
        todos: state.todos,
    };
}
  
export default connect(mapStateToProps, null)(List);