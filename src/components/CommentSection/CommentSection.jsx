import React, { useEffect, useState } from 'react';
import Comment from './Comment';

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
            {rootComments.map(rootComment =>
                <Comment commentId={rootComment.commentId} commentBody={rootComment.body} commentLikes={rootComment.likes} commentDislikes={rootComment.dislikes}/>
            )}
        </div>
    )
}

export default CommentSection;