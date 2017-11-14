import React from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class LastPosts extends React.Component {

    getLastPosts() {
        if(this.props.urlLastPosts === undefined) throw new Error("L'URL vers les derniers articles est manquante");

        // On récupère les derniers articles
        fetch(this.props.urlLastPosts)
        .then(response => {
            if(response.status === 200) {
                response.json().then(data => {
                    this.lastPosts = data.data;
                })
            } else throw new Error("Une erreur s'est produite lors du chargement des derniers articles");
        });
    }

    render() {
        this.getLastPosts();
        return (
            <div className="lastPostsContainer">
                <SectionTitle title="Mes derniers articles publiés" />
            </div>
        );
    }

}

export default LastPosts;
