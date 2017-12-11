import React from 'react';

/**
 * Composant affichant un article "vide"
 * @param {*} props 
 */
const emptyLastPost = props => {
    return <div className="post inLoading">{props.children}</div>
}

export default emptyLastPost;