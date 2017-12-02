import React from 'react';
import './InputSearch.css';

const inputSearch = props => {
    return <input type="text"
        placeholder={props.inputPlaceholder}
        className="components-input" />
}

export default inputSearch;
