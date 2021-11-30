import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Comment = (props) => {
    const [likes, setLikes] = useState(props.commentLikes)
    const [dislikes, setDislikes] = useState(props.commentDislikes)
    const [toggle1, setToggle1] = useState('')
    const [toggle2, setToggle2] = useState('')
    const [open, setOpen] = useState(false);
    const [reply, SetReply] = useState('')
    const [replyLikes, SetReplyLikes] = useState(0)
    const [replyDislikes, SetReplyDislikes] = useState(0)

    const handleClick = async(parentId)=>{
        reply={
            commentBody:reply,
            likes:replyLikes,
            dislikes:replyDislikes,
            parentId:parentId,
        }
    }

    return (
        <div>      
            <div key={props.commentId}>
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col-sm-10">
                                <p>{props.commentBody}</p>
                            </div>    
                            <div className="col-sm-2">
                                <div className="d-grid gap-2">
                                    <Button variant="success" onClick={() => {setLikes((likes + 1)); setToggle1('disabled');}} disabled={toggle1}>Like {likes}</Button>
                                    <Button variant="danger" onClick={() => {setDislikes((dislikes + 1)); setToggle2('disabled');}} disabled={toggle2}>Dislike {dislikes}</Button>
                                    <Button variant="primary" onClick={() => {setOpen(!open); handleClick(props.parentId)}}  aria-controls="reply" aria-expanded={open} >Reply</Button>
                                </div>
                            </div>
                        </div>  
                    </Card.Body>
                </Card>
            </div>
            <Collapse in={open} alignment="center">
                <div>
                <Form>
                    <FloatingLabel controlId="reply" label="Reply...">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form>
                </div>
            </Collapse>        
        </div>
    )
}

export default Comment;