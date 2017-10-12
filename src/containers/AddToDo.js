import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDo, incrementId } from '../actions/index';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onClick = this.onClick.bind(this);
        
    }


    inputChangeHandler(event){
        this.setState({value: event.target.value});        
    }


    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.onClick();
        }
    }

    onClick() {
        if(this.state.value!=''){
            this.props.incrementId();
            this.props.addToDo({
                id: this.props.counter,
                text: this.state.value,
                completed: false
            });
            this.setState({value: ''});
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="input-group" onKeyPress={this.onKeyPress}>
                        <input type="text"
                               value={this.state.value} 
                               onChange={this.inputChangeHandler} className="form-control"
                               placeholder="Aggiungi un'attività" aria-label="Aggiungi un'attività"
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.onClick}>Aggiungi</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
       

}

function mapDispatchToProps(dispatch) {
    return {
            addToDo: bindActionCreators(addToDo, dispatch),
            incrementId: bindActionCreators(incrementId, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        //just taking the WHOLE state and picking up only the key "counter" (see the reducers/index)
        counter: state.counter,
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);