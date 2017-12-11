import React from 'react';
import loadingImage from '../../assets/images/loading.gif';
import './Loading.css';

/**
 * Composant affichant l'image de loading
 * @param  {object} props [Props du composant]
 * @return {[type]}       [description]
 */
const loading = props => {
    return <div className="spinner"></div>
}

export default loading;
