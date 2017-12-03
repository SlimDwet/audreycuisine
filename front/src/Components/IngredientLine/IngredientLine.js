import React, {Components} from 'react';
import './IngredientLine.css';

const ingredientLine = props => {
    return (
        <p className="ingredientLine">
            <label htmlFor={props.randomKey}>{props.ingredientLineLabel}</label>
            <input type="text" id={props.randomKey} />
        </p>
    );
}

export default ingredientLine;
