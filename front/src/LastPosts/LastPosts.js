import React from 'react';
import './LastPosts.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import EmptyLastPost from './EmptyLastPost';
import Loading from '../Components/Loading/Loading';
import constants from '../utils/constants';
import {getFrenchDate, getRandomKey} from '../utils/functions';
import { sendRequest, treatResponse } from '../utils/requests';

class LastPosts extends React.Component {

    constructor() {
        super();
        this.state = {
            lastPosts: null,
            loading: true
        }
    }

    componentDidMount() {
        if(this.props.urlLastPosts === undefined || this.props.urlLastPosts.length === 0) throw new Error("L'URL vers les derniers articles est manquante");
        this.getLastPosts();
    }

    getLastPosts() {
        // On récupère les derniers articles
        if(!this.state.lastPosts) {
            sendRequest('get', this.props.urlLastPosts).then(res => {
                const response = treatResponse(res);
                if(res.status === 200) {
                    this.setState({
                        lastPosts: response.data,
                        loading: false
                    });
                } else throw new Error("Une erreur s'est produite lors du chargement des derniers articles");
            });
        }
    }

    /**
     * Retourne les X premiers mots du texte comme extrait
     * @param  {string} text [Texte à partir duquel on extrait le résumé]
     * @return {string}      [Extrait]
     */
    getExcerpt(text) {
        let words = text.trim().split(/\s+/);
        let excerpt = '';
        if(words.length > constants.excerptLength) {
            // On récupère les X premiers mots pour avoir le résumé
            let reducedWords = words.slice(0, constants.excerptLength);
            excerpt = reducedWords.join(' ')+'...';
        } else {
            excerpt = text;
        }
        return excerpt;
    }

    render() {
        let allPosts = [];
        if(this.state.loading) {
            // On affiche le loader
            allPosts = [
                <EmptyLastPost key={getRandomKey('lastPosts')}><Loading /></EmptyLastPost>,
                <EmptyLastPost key={getRandomKey('lastPosts')}><Loading /></EmptyLastPost>,
                <EmptyLastPost key={getRandomKey('lastPosts')}><Loading /></EmptyLastPost>,
                <EmptyLastPost key={getRandomKey('lastPosts')}><Loading /></EmptyLastPost>
            ];
        } else if(this.state.lastPosts) {
            this.state.lastPosts.forEach(post => {
                // On récupère les catégories
                let categories = [];
                post.category.map(elt => categories.push(elt.name));
                allPosts.push(
                    <div className="post" key={getRandomKey('lastPosts')}>
                        <a href="#">
                            <img src={post.urlPostThumbnail} />
                        </a>
                        <div className="postContainer">
                            <span className="postCategories">{categories.join(' ')}</span>
                            <a href="#" className="postLink">{post.title}</a>
                            <p className="postExcerpt">{this.getExcerpt(post.contentNoHtml)}</p>
                            <p className="postDate">{getFrenchDate(post.updated)}</p>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div>
                <SectionTitle title="Mes derniers articles publiés" />
                <div className="lastPostsContainer">
                    {allPosts}
                </div>
            </div>
        );
    }

}

export default LastPosts;
