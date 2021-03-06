import React, { Component } from 'react';
import './Search.css';
import { sendRequest, treatResponse } from '../utils/requests';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Loading from '../components/Loading/Loading';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ResultItem from './ResultItem';
import urls from '../utils/urls';
import { getRandomKey } from '../utils/functions';

class Search extends Component {

    state = {
        loading: true,
        searchedTerms: null,
        searchResult: null
    }

    /***** LIFECYCLES ****/
    componentWillMount() {
        // On écoute les changements de route (quand on tape des nouveaux termes dans le champ de recherche)
        this.unlisten = this.props.history.listen((location, action) => {
            this.launchSearch();
        });
    }

    componentDidMount() {
        this.launchSearch();
    }

    componentWillUnmount() {
        this.unlisten();
    }
    /***** FIN LIFECYCLES ****/

    /**
     * On éxécute une nouvelle recherche de termes
     * @return {} [description]
     */
    launchSearch = () => {
        this.setState((prevState, props) => {
            return {
                loading: true,
                searchedTerms: null,
                searchResult: null
            }
        }, () => {
            // On lance la recherche des termes
            this.searchTerm(this.props.location.search.slice(1));
        })
    }

    /**
     * Lancement de la requête de recherche d'articles
     * @param  {string} terms [Termes à rechercher]
     * @return {}       [description]
     */
    searchTerm = terms => {
        const searchUrl = `${urls.ingredients}?${encodeURI(terms)}`;
        if(terms !== null) {
            sendRequest('GET', searchUrl)
                .then(response => {
                    if(response.status === 200) {
                        const post = treatResponse(response);
                        this.setState({
                            searchResult: post.data,
                            searchedTerms: terms,
                            loading: false
                        });
                    }
                })
                .catch(reject => {
                    // Erreur lors de la requête (ex: 404)
                    this.setState({loading: false});
                });
        } else {
            this.setState({loading: false});
        }
    }

    /**
     * Construction de l'affichage des résultats de la recherche
     * @return {} []
     */
    getSearchRender = () => {
        if(this.state.searchedTerms === null || this.state.searchResult.length === 0) {
            return <h1 className="no-result">Aucun résultat ne correspond à votre recherche</h1>
        } else {
            const urlParams = new URLSearchParams(this.state.searchedTerms);
            const posts = this.state.searchResult.map(post => <ResultItem post={post} key={getRandomKey('search')} />);
            return (
                <div className="result">
                    <h2>Recettes avec les ingrédients : {[...urlParams.values()].join(', ')}</h2>
                    <p className="result-intro">Voici les recettes contenant tous les ingrédients que vous recherchez :</p>
                    <div className="post-list">
                        <ul>{posts}</ul>
                    </div>
                </div>
            );
        }
    }

    render() {
        const searchRender = this.state.loading === true ? <Loading /> : this.getSearchRender();
        return (
            <div className="wallpaper searchPage">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        {searchRender}
                    </div>
                    <RightSidebar />
                </div><br/>
                <Footer /><br/>
            </div>
        );
    }

}

export default Search;
