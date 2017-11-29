import React, { Component } from 'react';
import './App.css';
import urls from './utils/urls';
import Header from './Header/Header';
import LastPosts from './LastPosts';
import ButtonMagenta from './Components/ButtonMagenta/ButtonMagenta';
import InMyKitchen from './InMyKitchen/InMyKitchen';
import WhoAmI from './Modules/WhoAmI/WhoAmI';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        <LastPosts urlLastPosts={urls.lastPosts} /><br/><br/>
                        <ButtonMagenta text="Tous mes articles" link={urls.allPosts} />
                        <InMyKitchen urlInMyKitchen={urls.inMyKitchen} />
                    </div>
                    <div className="rightContent">
                        <WhoAmI />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
