import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import LastPosts from './LastPosts';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        <LastPosts urlLastPosts="http://audreycuisine-dev.fr/app_dev.php/category/last-posts" />
                    </div>
                    <div className="rightContent"></div>
                </div>
            </div>
        );
    }
}

export default App;
