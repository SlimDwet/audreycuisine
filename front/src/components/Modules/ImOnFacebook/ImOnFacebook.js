import React from 'react';
import './ImOnFacebook.css';
import fbEmbbeded from '../../../assets/images/fb_embbed.png';

const imOnFacebook = props => {
    return (
        <div className="modules imOnFacebook">
            <p className="moduleTitle">Je suis sur Facebook</p>
            <img src={fbEmbbeded} alt="Embbed facebook" />
        </div>
    );
}

export default imOnFacebook;