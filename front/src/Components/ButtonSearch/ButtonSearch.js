import React from 'react';
import './ButtonSearch.css';

const buttonSearch = props => {
    return <input type="submit" className="components-buttonSearch" value={props.buttonText} />
}

export default buttonSearch;
