import React from 'react';
import './Slide.css';
import { Link } from 'react-router-dom';

/**
 * Slide du carousel
 * @param  {object} props [description]
 * @return {[type]}       [description]
 */
const slide = props => {
    return (
        <picture>
            <source srcSet={props.slideSrcset} media={props.slideMedia}/>
            <img src={props.slideImgSrc} alt={props.slideImgAlt} title={props.slideImgTitle} />
            <div className="slideDetails">
                <Link to={props.slideCategoriesLink}>
                    <span className="category">{props.slideCategories}</span>
                </Link>
                <p>
                    <Link to={props.slideLink} className="link">{props.slideTitle}</Link>
                </p>
                <span className="date">{props.slideDate}</span>
            </div>
        </picture>
    );
}

export default slide;
