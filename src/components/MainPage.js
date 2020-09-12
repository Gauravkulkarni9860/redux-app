import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import AddNewItem from './addItem/AddItem';

class MainPage extends Component {
    render () {
        return (
            <div>
                <div>
                    <Header />
                </div>   
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/add-item" exact component={AddNewItem} />        
                </Switch>
            </div>
                 
        )
    }
}

export default MainPage;