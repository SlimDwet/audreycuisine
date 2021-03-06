import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { sendRequest, treatResponse } from '../utils/requests';
import { getFrenchDate } from '../utils/functions';
import urls from '../utils/urls';

import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import SocialNetworkPrintBanner from '../components/SocialNetworkPrintBanner/SocialNetworkPrintBanner';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Footer from '../components/Footer/Footer';
import Comments from '../components/Comments/Comments';

/**
 * Composant affichant la page d'article
 * @type {Object}
 */
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
                } else new Error("Une erreur s'est produite lors du chargement de l'article");
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
        const postImg = post.urlPostPicture !== null ? <img className="postPicture" src={post.urlPostPicture} alt={post.title} /> : null;
        const postCategoryLinks = post.categories.map((cat, index) => {
            return (index+1 === post.categories.length) ?
                <Link key={index} to={`/category/${cat.slug}`}>{cat.name}</Link> :
                <span key={index}><Link to={`/category/${cat.slug}`}>{cat.name}</Link>, </span>;
        });
        // Tags
        let tags;
        if(post.tags.length > 0) {
            const postTagsLinks = post.tags.map((tag, index) => {
                return (index+1 === post.tags.length) ?
                    <Link key={index} to={`/tag/${tag.slug}`}>{tag.name}</Link> :
                    <span key={index}><Link to={`/tag/${tag.slug}`}>{tag.name}</Link>, </span>
            });
            tags = <span className="cell postTags">Mots-clefs {postTagsLinks}   </span>
        }
        return (
            <div className="postWrapper">
                <div>
                    {postImg}
                    <h1 className="postTitle">{post.title}</h1>
                    <p className="postDetails">
                        <span className="cell author">Auteur <Link to={`/author/${post.author.url}`} className="authorLink">{post.author.name}</Link></span>
                        <span className="cell calendar"> Publié <Link to="/">{getFrenchDate(post.published)}</Link></span>
                        <span className="cell comments"> Commentaires <Link to="#comments">{post.comments.length}</Link></span>
                    </p>
                    <div className="postContent">
                        <div dangerouslySetInnerHTML={this.createMarkup(post.content)}></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <SocialNetworkPrintBanner />
                <div className="postDetails">
                    {tags}
                    <span className="cell postCategories">Catégories {postCategoryLinks}    </span>
                    <span className="cell views">Vues {post.views}</span>
                </div><br/>
                <div className="authorContainer">
                    <img src="https://secure.gravatar.com/avatar/bbce278a76df9a84f10710f475b6e546?s=100&d=mm&r=g" alt="Photo auteur" />
                    <span><Link to={`/author/${post.author.url}`} className="authorLink">{post.author.name}</Link></span>
                </div>
                <div id="comments">
                    <p className="title">
                        <strong>{(post.comments.length > 1) ? `${post.comments.length} commentaires` : `${post.comments.length} commentaire` }</strong>
                    </p>
                    <Comments comments={post.comments} />
                </div>
                <br/><br/><br/>
            </div>
        );
    }

    render() {
        let postRendering = (this.state.loading === true) ? <Loading /> : this.getPostRendering();
        return (
            <div className="wallpaper postPage">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        {postRendering}
                    </div>
                    <RightSidebar />
                </div><br/>
                <Footer /><br/>
            </div>
        );
    }

}

export default Post;
