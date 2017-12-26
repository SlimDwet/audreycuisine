import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { sendRequest, treatResponse } from '../utils/requests';
import { getFrenchDate } from '../utils/functions';
import urls from '../utils/urls';
import constants from '../utils/constants';

import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import SocialNetworkPrintBanner from '../components/SocialNetworkPrintBanner/SocialNetworkPrintBanner';
import Footer from '../components/Footer/Footer';
import WhoAmI from '../components/Modules/WhoAmI/WhoAmI';
import SocialMedias from '../components/Modules/SocialMedias/SocialMedias';
import Search from '../components/Modules/Search/Search';
import Newsletter from '../components/Modules/Newsletter/Newsletter';
import FindRecipe from '../components/Modules/FindRecipe/FindRecipe';
import MyBooks from '../components/Modules/MyBooks/MyBooks';
import LikeTea from '../components/Modules/LikeTea/LikeTea';

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
                <span><Link to={`/category/${cat.slug}`}>{cat.name}</Link>, </span>;
        });
        return (
            <div className="postWrapper">
                <div>
                    {postImg}
                    <h1 className="postTitle">{post.title}</h1>
                    <p className="postDetails">
                        <span className="cell author">Auteur <Link to={`/author/${post.author.url}`} className="authorLink">{post.author.name}</Link></span>
                        <span className="cell calendar"> Publié <Link to="/">{getFrenchDate(post.published)}</Link></span>
                        <span className="cell comments"> Commentaires <Link to="#comments">0</Link></span>
                    </p>
                    <div className="postContent">
                        <div dangerouslySetInnerHTML={this.createMarkup(post.content)}></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <SocialNetworkPrintBanner />
                <div className="postDetails">
                    <span className="cell postCategories">Catégories {postCategoryLinks}    </span>
                    <span className="cell views">Vues {post.views}</span>
                </div><br/>
                <div className="authorContainer">
                    <img src="https://secure.gravatar.com/avatar/bbce278a76df9a84f10710f475b6e546?s=100&d=mm&r=g" alt="Photo auteur" />
                    <span><Link to={`/author/${post.author.url}`} className="authorLink">{post.author.name}</Link></span>
                </div>
                <div id="comments"></div>
                <br/><br/><br/>
            </div>
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
                    <div className="rightContent">
                        <WhoAmI /><br/>
                        <SocialMedias /><br/>
                        <Search /><br/>
                        <Newsletter /><br/>
                        <FindRecipe /><br/>
                        <MyBooks books={constants.books} /><br/>
                        <LikeTea /><br/>
                    </div>
                </div><br/>
                <Footer /><br/>
            </div>
        );
    }

}

export default Post;
