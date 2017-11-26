import React from 'react';
import './WhoAmI.css';
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle';

/**
 * Module Qui se cache derrière Ma P'tite cuisine
 */
const WhoAmI = () => {
    return (
        <div className="whoAmIContainer modules">
            <ModuleTitle title="Qui se cache derrière Ma P'tite cuisine" />
            <br/>
            <img src="https://www.audreycuisine.fr/wp-content/uploads/2017/10/37532703230_417b127798_z.jpg" alt="Photo Audrey Bourdin" />
            <br/><br/>
            <span className="name">Audrey Bourdin</span>
            <em className="hobbies">Auteur, blogueur & influenceur</em>
            <p className="myStory">
                Depuis 2005 je partage sur mon blog <strong>mes recettes quotidiennes</strong>, plus gourmandes les unes que les autres, ainsi que mes
                découvertes dans le monde de la gourmandise, mes <strong>bonnes adresses, mes coups de coeur et mes voyages</strong>.
            </p><br/>
            <p className="myStory">
                Ma P’tite Cuisine c’est une grande communauté, vous êtes plus de <strong>12.000 visiteurs uniques chaque jour</strong> sur le blog et pas moins de <strong>
                48.000 sur les réseaux sociaux</strong>, tels que <a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Twitter</a> & <a href="#">Pinterest</a>.
            </p><br/><br/>
            <p className="myStory">Plus d'infos sur moi <a href="#">ici</a>.</p>
        </div>
    );
}

export default WhoAmI;