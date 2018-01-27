import React from 'react';
import './ResultItem.css';
import { Link } from 'react-router-dom';
import { getFrenchDate, getExcerpt } from '../utils/functions';
import constants from '../utils/constants';
import SocialNetworkPrintBanner from '../components/SocialNetworkPrintBanner/SocialNetworkPrintBanner';

/**
 * Composant affichant un résultat de recherche
 * @param  {object} props [Props du composant]
 * @return {}       []
 */
const resultItem = props => {
    const post = props.post;
    return (
        <article className="search-item">
            <img src={post.thumbnail} alt={post.title} />
            <div className="search-post-container">
                <p><Link className="search-post-link" to={`/article/${post.slug}`}>{post.title}</Link></p>
                <div className="search-post-details">
                    <span><i className="icon calendar"></i>{getFrenchDate(post.published.date)} </span>
                    <span><i className="icon comment"></i> <Link to={`/article/${post.slug}#comments`}>{`${post.comments.length} comments`}</Link> </span>
                    <span><i className="icon author"></i> <a href="#">{post.author}</a> </span>
                </div>
                <p className="search-post-content">{getExcerpt(post.content, constants.longExcerptLength)}</p>
            </div>
            <SocialNetworkPrintBanner />
        </article>
    );
}

export default resultItem;
