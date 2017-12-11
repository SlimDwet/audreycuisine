import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
            </div>
        );
    }
}

export default App;
