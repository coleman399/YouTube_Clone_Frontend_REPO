import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const CommentSection = props => {
    const [comments, setComments] = useState(props.backendData.comments)
    const rootComments = comments.filter(comment => comment.parentId === 0);
    console.log("rootComments", rootComments);

    useEffect(() => {
        console.log("render!");
        return () => {console.log("unmounting...");
    }, []});

    return (
        <div>
            <ErrorBoundary>
                {rootComments.map(rootComment =>
                    <Comment parentId={rootComment.parentId} commentId={rootComment.commentId} commentBody={rootComment.body} commentLikes={rootComment.likes} commentDislikes={rootComment.dislikes}/>
                    )}
            </ErrorBoundary>
        </div>
    )
}

export default CommentSection;