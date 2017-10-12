import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Indicators extends Component{

    constructor(props){
        super(props);

    }

    render(){
        this.percent = ((this.props.ncompleted/this.props.ntodos)*100) || 0;
        
        this.progressStyle = {
            width: `${this.percent}%`
         };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mb-1">
                            <div className="card-body">
                                <h4 className="card-title">Task completati: {this.props.ncompleted}</h4>
                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={this.percent} aria-valuemin="0" aria-valuemax="100" style={this.progressStyle}>{this.percent.toFixed(1)}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mb-1">
                            <div className="card-body">
                                <h4 className="card-title">Task totali</h4>
                                <p className="card-text">{this.props.ntodos}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        //just taking the WHOLE state and picking up only the key "ntodos" (see the reducers/index)
        ntodos: state.todos.length,
        ncompleted: state.todos.filter((todo) => todo.completed==true).length
    };
}
  
export default connect(mapStateToProps, null)(Indicators);