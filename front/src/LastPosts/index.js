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
        if(this.props.urlLastPosts === undefined || this.props.urlLastPosts.length === 0) throw new Error("L'URL vers les derniers articles est manquante");
        this.getLastPosts();
    }

    getLastPosts() {
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
            // this.state.lastPosts.forEach(post => {
            //     allPosts.push();
            // })
            allPosts.push(
                <div className="post">
                    <a href="#">
                        <img src="https://picsum.photos/300/255/?random" />
                    </a>
                    <p className="postContainer">
                        <span className="postCategories">blabla</span>
                        <a href="#" className="postLink">post link</a>
                        <p className="postExcerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quidem eaque praesentium, incidunt deleniti voluptates, assumenda, repellendus, sapiente voluptas temporibus in ullam. Sit excepturi dolorem inventore. Culpa obcaecati minus dicta? Eius ullam deleniti ipsam, voluptate libero sint, molestiae dolore earum sapiente iusto consequatur nostrum corporis ipsum, expedita eum, nihil veniam.</p>
                    </p>
                </div>,
                <div className="post">
                    <a href="#">
                        <img src="https://picsum.photos/300/255/?random" />
                    </a>
                    <p className="postContainer">
                        <span className="postCategories">blabla</span>
                        <a href="#" className="postLink">post link</a>
                        <p className="postExcerpt">lorem50</p>
                    </p>
                </div>,
                <div className="post">
                    <a href="#">
                        <img src="https://picsum.photos/300/255/?random" />
                    </a>
                    <p className="postContainer">
                        <span className="postCategories">blabla</span>
                        <a href="#" className="postLink">post link</a>
                        <p className="postExcerpt">lorem50</p>
                    </p>
                </div>,
                <div className="post">
                    <a href="#">
                        <img src="https://picsum.photos/300/255/?random" />
                    </a>
                    <p className="postContainer">
                        <span className="postCategories">blabla</span>
                        <a href="#" className="postLink">post link</a>
                        <p className="postExcerpt">lorem50</p>
                    </p>
                </div>
            );
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
