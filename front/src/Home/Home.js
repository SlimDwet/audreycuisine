import React from 'react';
import './Home.css';
import urls from '../utils/urls';
import constants from '../utils/constants';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LastPosts from '../containers/LastPosts/LastPosts';
import ButtonMagenta from '../components/ButtonMagenta/ButtonMagenta';
import InMyKitchen from '../containers/InMyKitchen/InMyKitchen';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import ImOnFacebook from '../components/Modules/ImOnFacebook/ImOnFacebook';
import ImOnInstagram from '../components/Modules/ImOnInstagram/ImOnInstagram';
import SocialNetworkPrintBanner from '../components/SocialNetworkPrintBanner/SocialNetworkPrintBanner';
import Carousel from '../components/Carousel/Carousel';

const home = props => {
    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="carouselWrapper">
                    <div className="carouselContainer">
                        <Carousel slides={constants.carousel} />
                    </div>
                    <div className="ad">
                        <a href="https://www.formulebeaute.com/sabonner/#ae45-1">
                            <img src="https://lb.affilae.com/imp/598c56825ad25b03a0cc6d08/59eda807bc9c3743ee5c2008/59957237e8facefe0c8b456a/https://s3-eu-west-1.amazonaws.com/aeup/uploads/programs/598c56825ad25b03a0cc6d08/elements/59957237e8facefe0c8b4567.jpeg"
                                alt="ad"/>
                        </a>
                    </div>
                </div><br/>
                <div className="leftContent">
                    <LastPosts urlLastPosts={urls.lastPosts} /><br/><br/>
                    <ButtonMagenta text="Tous mes articles" link={urls.allPosts} />
                    <InMyKitchen urlInMyKitchen={urls.inMyKitchen} /><br/>
                    <SectionTitle title="Suivez-moi sur les réseaux sociaux" /><br/>
                    <div className="socialNetworkContainer">
                        <ImOnFacebook />
                        <ImOnInstagram />
                    </div>
                    <SocialNetworkPrintBanner />
                </div>
                <RightSidebar />
            </div><br/>
            <Footer /><br/>
        </div>
    );
}

export default home;
