import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { getFrenchDate, getExcerpt } from '../../utils/functions';
import constants from '../../utils/constants';

/**
 * Composant affichant un item article
 * @param  {object} props [Props du composant]
 * @return {}       []
 */
const post = props => {
    return (
        <figure className="category-post">
            <img src={props.data.thumbnail} alt={`Illustration ${props.data.title}`} />
            <figcaption>
                <Link className="postTitle" to={`/article/${props.data.slug}`}>{props.data.title}</Link>
                <p class="postDetails">
                    <span class="cell calendar"> {getFrenchDate(props.data.updated.date)}</span>
                    <span class="cell comments"> <a href="#comments">{props.data.comments} commentaires</a></span>
                    <span class="cell author"><a class="authorLink" href="/author/audrey">{props.data.author}</a></span>
                </p>
                <p className="postContent">{getExcerpt(props.data.content, constants.longExcerptLength)}</p>
                <span className="postTitle">
                    Pour imprimer mes articles ou les faire découvrir sur vos réseaux sociaux c'est facile : cliquez !
                </span>
                <ul>
                    <li><a href="#">Cliquez pour imprimer (ouvre dans une nouvelle fenêtre)</a></li>
                    <li><a href="#">Cliquez pour envoyer par e-mail à un ami(ouvre dans une nouvelle fenêtre)</a></li>
                    <li><a href="#">Cliquez pour partager sur Facebook (ouvre dans une nouvelle fenêtre)</a></li>
                    <li><a href="#">Cliquez pour partager sur Twitter (ouvre dans une nouvelle fenêtre)</a></li>
                    <li><a href="#">Cliquez pour partager sur Google+ (ouvre dans une nouvelle fenêtre)</a></li>
                    <li><a href="#">Cliquez pour partager sur Pinterest (ouvre dans une nouvelle fenêtre)</a></li>
                </ul>
            </figcaption>
        </figure>
    );
}

export default post;
