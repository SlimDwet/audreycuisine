import React, { Component } from 'react';
import './TopMenu.css';
import TopMenu from './TopMenu';
import Categories from './Categories';

class Header extends Component {
    render() {
        return (
            <div className="topMenuWrapper">
                <TopMenu />
                <div className="logo">
                    <a href="/">
                        <img src="https://www.audreycuisine.fr/wp-content/uploads/2016/01/header1.png" alt="Illustration header" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
