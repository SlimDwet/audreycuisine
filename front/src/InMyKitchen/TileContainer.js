import React from 'react';
import './TileContainer.css';
import Tile from './Tile';

const tileContainer = (props) => {
    let tilePosts = [];
    props.posts.forEach(post => tilePosts.push(<Tile title={post.title} thumbnail={post.thumbnail} date={post.date} />))
    return (
        <div className="tileContainer">
            <div className="tileName">
                <span>{props.name}</span>
            </div>
            {tilePosts}
        </div>
    );
}

export default tileContainer;
