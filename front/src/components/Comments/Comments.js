import React from 'react';
import './Comments.css';
import { getRandomKey, getFrenchDate } from '../../utils/functions';

const comments = props => {
    return props.comments.map(com => {
        return (
            <div key={getRandomKey('comment')} className="postCommentWrapper">
                <span>
                    <img src="https://secure.gravatar.com/avatar/63f71c363aa0e1ec6538a618022cf316?s=50&d=mm&r=g" alt="Author avatar" />
                </span>
                <div className="postCommentContainer">
                    <strong className="postCommentAuthor">{com.author}</strong>   <span className="postCommentPublished">{getFrenchDate(com.published)}</span>
                    <pre className="postCommentContent">{com.content}</pre>
                </div>
            </div>
        );
    });
}

export default comments;
