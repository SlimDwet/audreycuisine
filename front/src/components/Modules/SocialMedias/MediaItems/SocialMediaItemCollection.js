import React from 'react';
import SocialMediaItem from './SocialMediaItem';
import {getRandomKey} from '../../../../utils/functions'

/**
 * Tri des éléments
 * @param  {object} item1 [Elément 1]
 * @param  {object} item2 [Element 2]
 * @return {integer}       [Indique si l'élement 1 est inférieur, supérieur ou égal à l'élément 2]
 */
const sortItems = (item1, item2) => {
    if (item1.order < item2.order)
        return -1;
    if (item1.order > item2.order)
        return 1;
    // item1 = item2
    return 0;
}

const socialMediaItemsCollection = props => {
    // On tri les réseaux sociaux selon l'ordre définit pour l'affichage
    const socialMedias = props.socialMediaList.sort(sortItems);
    // On génère les composants item
    return socialMedias.map(elt => {
        return <SocialMediaItem itemClass={elt.css} itemLink={elt.link} itemAlt={elt.alt} key={getRandomKey('mediaItem')} />
    })
}

export default socialMediaItemsCollection;
