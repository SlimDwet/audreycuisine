import React, { Component } from 'react';
import urls from '../utils/urls';
import constants from '../utils/constants';

import Header from '../components/Header/Header';
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
                        <SectionTitle title="Suivez-moi sur les réseaux sociaux" />
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
                </div>
            </div>
        );
    }
}

export default Home;
