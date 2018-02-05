import React from 'react'
import './SocialMediaItem.css'

const socialMediaItem = props => {
    return (
        <li className="socialMediaItem">
            <a className={props.itemClass} alt={props.itemAlt} href={props.itemLink} target="_blank">{props.itemName}</a>
        </li>
    );
}

export default socialMediaItem
