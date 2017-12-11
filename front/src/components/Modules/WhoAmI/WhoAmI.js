import React from 'react';
import './WhoAmI.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';
import utils from '../../../utils/constants';
import urls from '../../../utils/urls';

/**
 * Retourne la description du réseau social recherché
 * @param  {string} name [Nom du réseau social]
 * @return {object}      [Paramètres du réseau social]
 */
const getSocialMediaByName = name => {
    let socialMedia = utils.socialMedias.filter(elt => {
        return elt.css === name
    });
    return socialMedia[0];
}

/**
 * Module Qui se cache derrière Ma P'tite cuisine
 */
const WhoAmI = () => {
    const facebook = getSocialMediaByName('facebook');
    const instagram = getSocialMediaByName('instagram');
    const twitter = getSocialMediaByName('twitter');
    const pinterest = getSocialMediaByName('pinterest');
    return (
        <div className="whoAmIContainer modules">
            <ModuleTitle title="Qui se cache derrière Ma P'tite cuisine" />
            <br/>
            <img src="https://www.audreycuisine.fr/wp-content/uploads/2017/10/37532703230_417b127798_z.jpg" alt="Audrey Bourdin" />
            <br/><br/>
            <span className="name">Audrey Bourdin</span>
            <em className="hobbies">Auteur, blogueur & influenceur</em><br/>
            <p className="myStory">
                Depuis 2005 je partage sur mon blog <strong>mes recettes quotidiennes</strong>, plus gourmandes les unes que les autres, ainsi que mes
                découvertes dans le monde de la gourmandise, mes <strong>bonnes adresses, mes coups de coeur et mes voyages</strong>.
            </p><br/>
            <p className="myStory">
                Ma P’tite Cuisine c’est une grande communauté, vous êtes plus de <strong>12.000 visiteurs uniques chaque jour</strong> sur le blog et pas moins de <strong>
                48.000 sur les réseaux sociaux</strong>, tels que <a href={facebook.link}>Facebook</a>, <a href={instagram.link}>Instagram</a>, <a href={twitter.link}>Twitter</a> & <a href={pinterest.link}>Pinterest</a>.
            </p><br/>
            <p className="myStory">Plus d'infos sur moi <a href={urls.aPropos}>ici</a>.</p>
        </div>
    );
}

export default WhoAmI;
