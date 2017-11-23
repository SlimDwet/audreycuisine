import React from 'react';
import './ButtonMagenta.css';

const ButtonMagenta = (props) => {
    return (
        <div>
            <a className="buttonMagenta" href={props.link}>{props.text}</a>
        </div>
    );
}

export default ButtonMagenta;
