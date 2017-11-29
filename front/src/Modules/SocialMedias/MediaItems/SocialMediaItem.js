import React from 'react'
import './MediaItem.css'

const mediaItem = props => {
    return (
        <li className="socialMediaItem">
            <a className={props.itemClass} href={props.itemLink}></a>
        </li>
    );
}

export default mediaItem
