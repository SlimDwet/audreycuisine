import React from 'react';
import './LastPosts.css';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmptyLastPost from './EmptyLastPost';
import Loading from '../../components/Loading/Loading';
import constants from '../../utils/constants';
import {getFrenchDate, getRandomKey, getExcerpt} from '../../utils/functions';
import { sendRequest, treatResponse } from '../../utils/requests';

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
        }
        if(this.state.lastPosts) {
            this.state.lastPosts.forEach(post => {
                // On récupère les catégories
                let categories = [];
                post.category.map(elt => categories.push(elt.name));
                allPosts.push(
                    <div className="post" key={getRandomKey('lastPosts')}>
                        <Link to={'/article/'+post.slug}>
                            <img src={post.urlPostThumbnail} alt={post.title} />
                        </Link>
                        <div className="postContainer">
                            <span className="postCategories">{categories.join(' ')}</span>
                            <Link to={'/article/'+post.slug} className="postLink">{post.title}</Link>
                            <p className="postExcerpt">{getExcerpt(post.contentNoHtml, constants.excerptLength)}</p>
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
