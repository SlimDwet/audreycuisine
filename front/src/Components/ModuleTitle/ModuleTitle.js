import React from 'react';
import './ModuleTitle.css';

/**
 * Titre des modules
 * @param  {object} props [Dictionnaire des props]
 * @return
 */
const moduleTitle = (props) => {
    if(props.title === undefined) throw new Error("Le titre du module n'a pas été renseigné");
    return (
        <div className="moduleTitleContainer">
            <span className="title">{props.title}</span>
            <span className="separatorContainer">
                <span className="separator"></span>
            </span>
        </div>
    );
}

export default moduleTitle;
