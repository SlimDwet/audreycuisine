import React from 'react';

/**
 * Composant affichant une goutière vide
 * @param {*} props 
 */
const emptyTileContainer = props => {
    return <div className="tileContainer">{props.children}</div>
}

export default emptyTileContainer;