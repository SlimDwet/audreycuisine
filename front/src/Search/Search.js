import React, { Component } from 'react';
import { sendRequest, treatResponse } from '../utils/requests';
import urls from '../utils/urls';

class Search extends Component {

    state = {
        loading: true,
        searchedTerms: null,
        searchResult: null
    }

    constructor() {
        super();
    }

    componentDidMount() {
        // On extrait les termes à rechercher dans l'URL
        const url = new URLSearchParams(this.props.location.search);
        // On lance la recherche des termes
        this.searchTerm(url.get('terms'));
    }

    /**
     * Lancement de la requête de recherche d'articles
     * @param  {string} terms [Termes à rechercher]
     * @return {}       [description]
     */
    searchTerm = terms => {
        const searchUrl = `${urls.search}/${encodeURI(terms)}`;
        sendRequest('GET', searchUrl)
            .then(response => {
                if(response.status === 200) {
                    const post = treatResponse(response);
                    this.setState({
                        searchResult: post.data,
                        searchedTerms: terms,
                        loading: false
                    });
                } else new Error("Une erreur s'est produite lors du chargement de l'article");
            }
        );
    }

    render() {
        return <h1>SEARCH PAGE</h1>
    }

}

export default Search;
