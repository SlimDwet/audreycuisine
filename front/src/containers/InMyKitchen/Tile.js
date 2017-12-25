import React from 'react';
import './Tile.css';
import {getFrenchDate} from '../../utils/functions';

const tile = (props) => {
    return (
        <div className="tilePost">
            <img src={props.thumbnail} alt="Illustration article" />
            <a href="#">{props.title}</a>
            <p className="date">{getFrenchDate(props.date)}</p>
        </div>
    );
}

export default tile;
