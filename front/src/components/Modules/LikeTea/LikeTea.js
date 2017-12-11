import React from 'react';
import './LikeTea.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';

/**
 * Module Vous aimez le thé
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const likeTea = props => {
    return (
        <div className="modules likeTea">
            <ModuleTitle title="Vous aimez le thé ?" /><br/>
            <img src="https://s3-eu-west-1.amazonaws.com/aeup/uploads/programs/544e2aec23b94448048b4944/elements/5a006a2de8facec91d8b4574.gif"
                alt="Illustration Vous aimez le thé ?" />
        </div>
    );
}

export default likeTea;
