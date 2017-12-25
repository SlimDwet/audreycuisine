import React, { Component } from 'react';
import './Post.css';
import { sendRequest, treatResponse } from '../utils/requests';
import { getFrenchDate } from '../utils/functions';
import urls from '../utils/urls';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

class Post extends Component {

    state = {
        post: null,
        loading: true
    }

    componentDidMount() {
        const slug = this.props.location.pathname.substring(9);
        const postUrl = `${urls.posts}/${slug}`;
        sendRequest('GET', postUrl)
            .then(response => {
                if(response.status === 200) {
                    const post = treatResponse(response);
                    this.setState({
                        post: post.data,
                        loading: false
                    });
                } else throw new Error("Une erreur s'est produite lors du chargement de l'article");
            }
        );
    }

    /**
     * Retourne un string contenant de l'HTML en HTML
     * @param  {string} htmlString [String contenant l'HTML]
     * @return {object}            [HTML]
     */
    createMarkup = (htmlString) => {
        return {__html: htmlString};
    }

    /**
     * Construit le contenu de la page article
     * @return {[type]} [description]
     */
    getPostRendering = () => {
        const post = {...this.state.post};
        const postImg = post.urlPostPicture !== null ? <img src={post.urlPostPicture} alt={post.title} /> : null;
        return (
            <article>
                {postImg}
                <h1 className="postTitle">{post.title}</h1>
                <p className="postDetails">
                    <i className="author"></i> Auteur <a href="#">{post.author}</a>
                    <i className="calendar"></i> Publié <a href="#">{getFrenchDate(post.published)}</a>
                    <i className="comments"></i> Commentaires <a href={`${this.props.location.pathname}#comments`}>0</a>
                    <div className="postContent" dangerouslySetInnerHTML={this.createMarkup(post.content)}/>
                </p>
            </article>
        );
    }

    render() {
        let postRendering = (this.state.loading === true) ? <Loading /> : this.getPostRendering();
        return (
            <div className="postPage">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        {postRendering}
                    </div>
                    <div className="rightContent"></div>
                </div>
            </div>
        );
    }

}

export default Post;
