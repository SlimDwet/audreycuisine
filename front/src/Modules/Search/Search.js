import React, {Component} from 'react';
import './Search.css';
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle';
import InputSearch from './InputSearch';
import ButtonSearch from './ButtonSearch';

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
        let searchText = evt.target.elements['inputSearch'].value;
        // Mise à jour du state
        this.setState({
            'searchText': searchText
        })
    }

    render() {
        return (
            <form className="searchModuleContainer modules" onSubmit={this.inputSearchHandler}>
                <ModuleTitle title="Recherche" />
                <InputSearch searchText={this.state.searchText} />
                <ButtonSearch />
            </form>
        );
    }

}

export default Search;
