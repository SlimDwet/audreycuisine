import React from 'react';
import './Tile.css';
import {getFrenchDate} from '../../utils/functions';
import { Link } from 'react-router-dom';

const tile = (props) => {
    return (
        <div className="tilePost">
            <img src={props.thumbnail} alt="Illustration article" />
            <Link to={'/article/'+props.slug}>{props.title}</Link>
            <p className="date">{getFrenchDate(props.date)}</p>
        </div>
    );
}

export default tile;
