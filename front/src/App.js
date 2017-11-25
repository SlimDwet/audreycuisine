import React, { Component } from 'react';
// import logo from './logo.svg';
import urls from './utils/urls';
import Header from './Header';
import LastPosts from './LastPosts';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import ButtonMagenta from './Components/ButtonMagenta/ButtonMagenta';
import InMyKitchen from './InMyKitchen/InMyKitchen';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        <LastPosts urlLastPosts={urls.lastPosts} /><br/><br/>
                        <ButtonMagenta text="Tous mes articles" link={urls.allPosts} /><br/><br/>
                        <InMyKitchen urlInMyKitchen={urls.inMyKitchen} />
                    </div>
                    <div className="rightContent"></div>
                </div>
            </div>
        );
    }
}

export default App;
