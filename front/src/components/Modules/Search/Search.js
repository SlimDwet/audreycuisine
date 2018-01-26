import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Search.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';
import InputSearch from '../../InputSearch/InputSearch';
import ButtonSearch from '../../ButtonSearch/ButtonSearch';

class Search extends Component {

    /**
     * Fonction qui récupère le texte recherché
     * @param  {Event} evt [Event de soumission du formulaire]
     * @return
     */
    inputSearchHandler = evt => {
        evt.preventDefault();
        // Récupération du texte saisi
        const inputIndex = 0;
        const searchText = evt.target.elements[inputIndex].value;
        // Mise à jour du state
        this.props.history.push({
            pathname: '/search',
            search: '?terms='+encodeURI(searchText)
        }, this.props.location.state);
    }

    render() {
        return (
            <form className="searchModuleContainer modules" onSubmit={this.inputSearchHandler}>
                <ModuleTitle title="Recherche" />
                <InputSearch inputPlaceholder="Tapez votre recherche puis Ent" />
                <ButtonSearch buttonText="" />
            </form>
        );
    }

}

export default withRouter(Search);
