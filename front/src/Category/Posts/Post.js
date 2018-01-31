import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

/**
 * Composant affichant un item article
 * @param  {object} props [Props du composant]
 * @return {}       []
 */
const post = props => {
    return (
        <figure className="category-post">
            <img src={props.data.thumbnail} alt={`Illustration ${props.data.title}`} />
            <figcaption>Je décris une image</figcaption>
        </figure>
    );
}

export default post;
