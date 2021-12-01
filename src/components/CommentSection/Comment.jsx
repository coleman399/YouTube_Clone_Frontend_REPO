import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

const Comment = (props) => {
    const [likes, setLikes] = useState(props.commentLikes);
    const [dislikes, setDislikes] = useState(props.commentDislikes);
    const [toggle1, setToggle1] = useState('');
    const [toggle2, setToggle2] = useState('');
    const [open, setOpen] = useState(false);
    const [body, setBody] = useState('');
    const [commentId, setCommentId] = useState(0);
    const [parentId, setParentId] = useState(props.parentId);
    
    let data = {
        videoId: props.videoId,
        likes: props.video.likes,
        dislikes: props.video.dislikes,
        comments: [{
            commentId: commentId,
            parentId: parentId,
            body: body,
            likes: likes,
            dislikes: dislikes,
        }]
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommentId(Math.random());
        setParentId(parentId);
        setBody(e.target[0].value);
        data.comments[0].likes = 0;
        data.comments[0].dislikes = 0;
        props.postBackendData(data)
        console.log(data)
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
                                    <Button variant="primary" onClick={() => {setOpen(!open)}} aria-controls="reply" aria-expanded={open}>Reply</Button>
                                </div>
                            </div>
                        </div>  
                    </Card.Body>
                </Card>
            </div>
            <Collapse in={open} alignment="center">
                <div className="container">
                <Form id="reply" onSubmit={e => handleSubmit(e)}>
                    <FloatingLabel controlId="reply">
                        <InputGroup id="reply">
                            <Form.Control
                                id="reply"
                                as="textarea"
                                placeholder="Reply..."
                                style={{ height: '100px' }}
                            >
                            </Form.Control>
                            <Button id="reply" type="submit" variant="primary" value="reply">Go</Button>
                        </InputGroup>
                    </FloatingLabel>
                </Form>
                </div>
            </Collapse>        
        </div>
    )
}

export default Comment;