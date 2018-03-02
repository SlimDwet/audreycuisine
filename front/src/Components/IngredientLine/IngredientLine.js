import React from 'react';
import './IngredientLine.css';

const ingredientLine = props => {
    let inputRef = null;
    return (
        <p className="ingredientLine">
            <label htmlFor={props.randomKey}>{props.ingredientLineLabel}</label>
            <input type="text" id={props.randomKey} ref={input => inputRef = input} onBlur={() => props.getIngredient(inputRef.value)} />
        </p>
    );
}

export default ingredientLine;
