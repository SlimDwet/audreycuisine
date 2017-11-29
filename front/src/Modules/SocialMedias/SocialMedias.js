import React from 'react'
import './SocialMedias.css'
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle'
import MediaItem from './MediaItem'
import utils from '../../utils/constants'
import {getRandomKey} from '../../utils/functions'

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

const socialMedias = props => {
    // On récupère la liste des médias sociaux triés selon l'ordre
    const socialMedias = utils.socialMedias.sort(sortItems);
    let socialMediasItems = [];
    // On génère une liste de composants item
    socialMedias.map(elt => socialMediasItems.push(<MediaItem itemClass={elt.css} itemLink={elt.link} key={getRandomKey('mediaItem')} />))
    console.log(socialMediasItems);

    return (
        <div className="modules socialMediasContainer">
            <ModuleTitle title="Suivez-moi sur les réseaux sociaux" />
            <ul>{socialMediasItems}</ul>
        </div>
    )
}

export default socialMedias
