import React from 'react';
import './ImOnInstagram.css';
import igEmbbeded from '../../../assets/images/ig_embbed.png';

const imOnInstagram = props => {
    return (
        <div className="modules imOnInstagram">
            <p className="moduleTitle">mais aussi sur Instagram</p>
            <img src={igEmbbeded} alt="Embbed instagram" />
        </div>
    );
}

export default imOnInstagram;