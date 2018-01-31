import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TopMenu from './TopMenu/TopMenu';
import Categories from './Categories/Categories';

class Header extends Component {
    render() {
        return (
            <header className="topMenuWrapper">
                <TopMenu />
                <div className="logo">
                    <Link to="/">
                        <img src="https://www.audreycuisine.fr/wp-content/uploads/2016/01/header1.png" alt="Illustration header" />
                    </Link>
                    <h2 className="site-description">
                        Mon blog de recettes quotidiennes, tant sucrées que salées, light ou moins light, pour tous les jours ou les grandes occasions
                    </h2>
                </div>
                <Categories />
            </header>
        );
    }
}

export default Header;
