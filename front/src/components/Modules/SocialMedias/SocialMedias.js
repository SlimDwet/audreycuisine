import React from 'react'
import './SocialMedias.css'
import ModuleTitle from '../../ModuleTitle/ModuleTitle'
import SocialMediaItemCollection from './MediaItems/SocialMediaItemCollection'
import utils from '../../../utils/constants'

const socialMedias = props => {
    return (
        <div className="modules socialMediasContainer">
            <ModuleTitle title="Suivez-moi sur les réseaux sociaux" />
            <ul className="socialMediaList">
                <SocialMediaItemCollection socialMediaList={utils.socialMedias} />
            </ul>
        </div>
    )
}

export default socialMedias
