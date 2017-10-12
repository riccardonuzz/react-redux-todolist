import React, {Component} from 'react';

import Header from '../containers/Header';
import Indicators from '../containers/Indicators';
import AddToDo from '../containers/AddToDo';
import List from '../containers/List';


export default class App extends Component {


    render() {
        return(
            <div>
                <Header />
                <br />
                <Indicators />
                <br />
                <div className="container">
                    <AddToDo />
                    <br />
                    <List />
                    <br />
                </div>
            </div>
        );
    }

}