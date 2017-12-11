import React from 'react';
import './TopMenu.css';

class TopMenu extends React.Component {

    constructor() {
        super();
        // Définition du top menu
        this.dns = "http://audreycuisine-dev.fr/app_dev.php/";
        this.topMenuDefinition = [
            {
                "title": "Accueil",
                "slug": "",
                "isVisible": true
            },
            {
                "title": "Présentation",
                "slug": "a-propos",
                "isVisible": true
            },
            {
                "title": "Références",
                "slug": "a-propos/references",
                "isVisible": true
            },
            {
                "title": "Mes livres",
                "slug": "mes-livres",
                "isVisible": true
            },
            {
                "title": "Prestations",
                "slug": "prestations",
                "isVisible": true
            },
            {
                "title": "Index",
                "slug": "index",
                "isVisible": true
            },
            {
                "title": "Contact",
                "slug": "contact",
                "isVisible": true
            }
        ];
    }

    render() {
        let topMenuItems = [];
        this.topMenuDefinition.forEach((menu, index) => {
            let url = this.dns+menu.slug;
            let linkClass = (menu.slug === "") ? "active" : "";
            topMenuItems.push(<li key={index}><a href={url} className={linkClass}>{menu.title}</a></li>);
        });
        return (
            <nav className="topMenu">
                <ul>{topMenuItems}</ul>
            </nav>
        );
    }

}

export default TopMenu;
