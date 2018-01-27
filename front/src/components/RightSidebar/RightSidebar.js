import React from 'react';
import WhoAmI from '../Modules/WhoAmI/WhoAmI';
import SocialMedias from '../Modules/SocialMedias/SocialMedias';
import Search from '../Modules/Search/Search';
import Newsletter from '../Modules/Newsletter/Newsletter';
import FindRecipe from '../Modules/FindRecipe/FindRecipe';
import MyBooks from '../Modules/MyBooks/MyBooks';
import LikeTea from '../Modules/LikeTea/LikeTea';
import constants from '../../utils/constants';

/**
 * Composant affichant la sidebar de droite
 * @param  {object} props [Props du composant]
 * @return {}       []
 */
const rightSidebar = props => {
    return (
        <div className="rightContent">
            <WhoAmI /><br/>
            <SocialMedias /><br/>
            <Search /><br/>
            <Newsletter /><br/>
            <FindRecipe /><br/>
            <MyBooks books={constants.books} /><br/>
            <LikeTea /><br/>
        </div>
    );
};

export default rightSidebar;
