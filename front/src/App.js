import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Post from './Post/Post';
import Search from './Search/Search';
import Category from './Category/Category';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/article" component={Post} />
                    <Route path="/search" component={Search} />
                    <Route path="/category" component={Category} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
