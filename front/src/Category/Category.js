import React, { Component } from 'react';
import './Category.css';
import Loading from '../components/Loading/Loading';
import { sendRequest, treatResponse } from '../utils/requests';
import { getRandomKey } from '../utils/functions';
import Header from '../components/Header/Header';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Footer from '../components/Footer/Footer';
import Post from './Posts/Post';

/**
 * Composant gérant la page catégorie
 * @type {Object}
 */
class Category extends Component {

    state = {
        loading: true,
        posts: null,
        categoryFullName: null
    }

    componentWillMount() {
        // Extraction de la catégorie dans l'URL
        const re = /category\/([\w-]+)/i;
        const categoryUrlMatch = this.props.location.pathname.match(re);
        this.categoryName = categoryUrlMatch === null ? null : categoryUrlMatch[categoryUrlMatch.index];
    }

    componentDidMount() {
        this.getPosts();
    }

    /**
     * Recherche des articles appartenant à une catégorie
     * @param  {string} categoryName [Nom de la catégorie]
     * @return {}              []
     */
    searchPosts = categoryName => {
        sendRequest('GET', `/category/${categoryName}`)
        .then(response => {
            if(response.status === 200) {
                const posts = treatResponse(response);
                this.setState({loading: false, posts: posts.data.posts, categoryFullName: posts.data.category});
            } else {
                this.setState({loading: false});
            }
        })
        .catch(reject => {
            this.setState({loading: false});
        });
    }

    /**
     * Construit l'affichage des articles
     * @return {} []
     */
    getPosts = () => {
        if(this.state.posts !== null) {
            const posts = this.state.posts.map(post => <Post key={getRandomKey('category')} data={post} />);
            const render = (
                <div className="postList">
                    {posts}
                </div>
            );
            return render;
        } else if(this.state.loading === false) {
            return <h1 className="no-result">Aucun résultat</h1>
        } else {
            // Recherche des articles de la catégorie
            this.searchPosts(this.categoryName);
        }
    }

    render() {
        let categoryRender;
        switch (this.categoryName) {
            case null:
                categoryRender = <h1 className="no-result">La catégorie est invalide</h1>
                break;
            default:
                categoryRender = this.state.loading === true ? <Loading /> : this.getPosts();
                break;
        }
        return (
            <div className="category light-bg">
                <Header />
                <h2 className="categoryName">{this.state.categoryFullName}</h2>
                <div className="container">
                    <div className="leftContent">
                        {categoryRender}
                    </div>
                    <RightSidebar />
                </div><br/>
                <Footer /><br/>
            </div>
        );
    }

}

export default Category;
