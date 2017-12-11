import React, {Component} from 'react';
import './Newsletter.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';
import ButtonSearch from '../../ButtonSearch/ButtonSearch';
import InputSearch from '../../InputSearch/InputSearch';

class Newsletter extends Component {

    state = {
        'email': ''
    }

    /**
     * Récupération du mail pour la newsletter
     * @param  {[type]} evt [description]
     * @return {[type]}     [description]
     */
    newsletterSubmitHandler = evt => {
        evt.preventDefault();
        const inputIndex = 0;
        // On récupère l'email saisi
        const mail = evt.target.elements[inputIndex].value;
        // Mise à jour du state
        this.setState({
            'email': mail
        });
    }

    render() {
        return (
            <form className="modules newsletter_container" onSubmit={this.newsletterSubmitHandler}>
                <ModuleTitle title="Abonnez-vous à notre newsletter" />
                <img src="https://www.audreycuisine.fr/wp-content/uploads/2016/01/Gif_abonnement_Audrey_Cuisine_01.gif" alt="Newsletter" />
                <InputSearch inputPlaceholder="E-mail" />
                <ButtonSearch buttonText="Je m'abonne !" />
            </form>
        );
    }

}

export default Newsletter;
