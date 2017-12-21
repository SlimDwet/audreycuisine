import React from 'react';
import './Slide.css';

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
                <a href={props.slideCategoriesLink}>
                    <span className="category">{props.slideCategories}</span>
                </a>
                <p>
                    <a href={props.slideLink} className="link">{props.slideTitle}</a>
                </p>
                <span className="date">{props.slideDate}</span>
            </div>
        </picture>
    );
}

export default slide;
