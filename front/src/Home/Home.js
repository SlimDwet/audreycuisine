import React, { Component } from 'react';
import './Home.css';
import urls from '../utils/urls';
import constants from '../utils/constants';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LastPosts from './LastPosts/LastPosts';
import ButtonMagenta from '../components/ButtonMagenta/ButtonMagenta';
import InMyKitchen from './InMyKitchen/InMyKitchen';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import WhoAmI from '../components/Modules/WhoAmI/WhoAmI';
import SocialMedias from '../components/Modules/SocialMedias/SocialMedias';
import Search from '../components/Modules/Search/Search';
import Newsletter from '../components/Modules/Newsletter/Newsletter';
import FindRecipe from '../components/Modules/FindRecipe/FindRecipe';
import MyBooks from '../components/Modules/MyBooks/MyBooks';
import LikeTea from '../components/Modules/LikeTea/LikeTea';
import ImOnFacebook from '../components/Modules/ImOnFacebook/ImOnFacebook';
import ImOnInstagram from '../components/Modules/ImOnInstagram/ImOnInstagram';
import SocialMediaItemCollection from '../components/Modules/SocialMedias/MediaItems/SocialMediaItemCollection';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <Header />
                <div className="container">
                    <div className="leftContent">
                        <LastPosts urlLastPosts={urls.lastPosts} /><br/><br/>
                        <ButtonMagenta text="Tous mes articles" link={urls.allPosts} />
                        <InMyKitchen urlInMyKitchen={urls.inMyKitchen} /><br/>
                        <SectionTitle title="Suivez-moi sur les réseaux sociaux" /><br/>
                        <div className="socialNetworkContainer">
                            <ImOnFacebook />
                            <ImOnInstagram />
                        </div>
                        <p className="printPost">
                            Pour imprimer mes articles ou les faire découvrir sur vos réseaux sociaux c'est facile : cliquez !
                        </p>
                        <ul className="printSocialMedias">
                            <SocialMediaItemCollection socialMediaList={constants.printSocialMedias} />
                        </ul>
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

export default Home;
