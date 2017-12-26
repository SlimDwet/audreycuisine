import React from 'react';
import './SocialNetworkPrintBanner.css';
import SocialMediaItemCollection from '../Modules/SocialMedias/MediaItems/SocialMediaItemCollection';
import constants from '../../utils/constants';

/**
 * Composant avec les liens vers les réseaux sociaux ainsi que l'impression
 * @param  {object} props [description]
 * @return {[type]}       [description]
 */
const socialNetworkPrintBanner = props => {
    return (
        <div className="socialNetworkPrintBanner">
            <p className="printPost">
                Pour imprimer mes articles ou les faire découvrir sur vos réseaux sociaux c'est facile : cliquez !
            </p>
            <ul className="printSocialMedias">
                <SocialMediaItemCollection socialMediaList={constants.printSocialMedias} />
            </ul>
        </div>
    );
}

export default socialNetworkPrintBanner;
