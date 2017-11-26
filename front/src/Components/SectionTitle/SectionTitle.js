import React from 'react';
import './SectionTitle.css';

/**
 * Classe gérant l'affichage des titres de section
 * @type {String}
 */
class SectionTitle extends React.Component {

    // Affichage
    render() {
        if(this.props.title === undefined) throw new Error("Le titre n'a pas été renseigné");
        return (
            <div className="sectionTitleContainer">
                <h4 className="title">{this.props.title}</h4>
                <span className="separatorContainer">
                    <span className="separator"></span>
                </span>
            </div>
        );
    }

}

export default SectionTitle;
