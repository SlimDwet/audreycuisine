import React, {Component} from 'react';
import './Search.css';
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle';
import InputSearch from '../../Components/InputSearch/InputSearch';
import ButtonSearch from '../../Components/ButtonSearch/ButtonSearch';

class Search extends Component {

    state = {
        'searchText': ''
    }

    /**
     * Fonction qui récupère le texte recherché
     * @param  {Event} evt [Event de soumission du formulaire]
     * @return
     */
    inputSearchHandler = evt => {
        evt.preventDefault();
        // Récupération du texte saisi
        const inputIndex = 0;
        let searchText = evt.target.elements[inputIndex].value;
        // Mise à jour du state
        this.setState({
            'searchText': searchText
        })
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

export default Search;
