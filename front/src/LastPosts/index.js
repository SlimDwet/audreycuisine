import React from 'react';
import './index.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class LastPosts extends React.Component {

    constructor() {
        super();
        this.state = {
            lastPosts: null
        }
    }

    componentDidMount() {
        this.getLastPosts();
    }

    getLastPosts() {
        if(this.props.urlLastPosts === undefined) throw new Error("L'URL vers les derniers articles est manquante");

        // On récupère les derniers articles
        if(!this.state.lastPosts) {
            fetch(this.props.urlLastPosts)
            .then(response => {
                if(response.status === 200) {
                    response.json().then(data => {
                        this.setState({
                            lastPosts: data.data
                        });
                    })
                } else throw new Error("Une erreur s'est produite lors du chargement des derniers articles");
            });
        }
    }

    render() {
        let allPosts = [];
        if(this.state.lastPosts) {
            this.state.lastPosts.forEach(post => {
                allPosts.push(
                    <div className="post">
                        {/*<img src={post.urlPostThumbnail} />*/}
                    </div>
                );
            })
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
