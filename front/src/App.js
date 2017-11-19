import React, { Component } from 'react';
// import logo from './logo.svg';
import urls from './utils/urls';
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
                        <LastPosts urlLastPosts={urls.lastPosts} />
                    </div>
                    <div className="rightContent"></div>
                </div>
            </div>
        );
    }
}

export default App;
