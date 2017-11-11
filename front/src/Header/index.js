import React, { Component } from 'react';
import './index.css';
import './TopMenu/TopMenu.css';
import TopMenu from './TopMenu/TopMenu';
import Categories from './Categories/index';

class Header extends Component {
    render() {
        return (
            <header className="topMenuWrapper">
                <TopMenu />
                <div className="logo">
                    <a href="/">
                        <img src="https://www.audreycuisine.fr/wp-content/uploads/2016/01/header1.png" alt="Illustration header" />
                    </a>
                </div>
                <Categories />
            </header>
        );
    }
}

export default Header;
