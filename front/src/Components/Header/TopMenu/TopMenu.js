import React from 'react';
import './TopMenu.css';
import { NavLink } from 'react-router-dom';

class TopMenu extends React.Component {

    constructor() {
        super();
        // Définition du top menu
        this.topMenuDefinition = [
            {
                "title": "Accueil",
                "slug": "/",
                "isVisible": true
            },
            {
                "title": "Présentation",
                "slug": "/a-propos",
                "isVisible": true
            },
            {
                "title": "Références",
                "slug": "/a-propos/references",
                "isVisible": true
            },
            {
                "title": "Mes livres",
                "slug": "/mes-livres",
                "isVisible": true
            },
            {
                "title": "Prestations",
                "slug": "/prestations",
                "isVisible": true
            },
            {
                "title": "Index",
                "slug": "/index",
                "isVisible": true
            },
            {
                "title": "Contact",
                "slug": "/contact",
                "isVisible": true
            }
        ];
    }

    render() {
        let topMenuItems = [];
        this.topMenuDefinition.forEach((menu, index) => {
            topMenuItems.push(<li key={index}><NavLink exact to={menu.slug}>{menu.title}</NavLink></li>);
        });
        return (
            <nav className="topMenu">
                <ul>{topMenuItems}</ul>
            </nav>
        );
    }

}

export default TopMenu;
