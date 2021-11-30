import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    const [open, setOpen] = useState(false);
    const [likes, setLikes] = useState(props.backendData.likes);
    const [dislikes, setDislikes] = useState(props.backendData.dislikes);
    const [toggle1, setToggle1] = useState('')
    const [toggle2, setToggle2] = useState('')
    
    let url = "https://www.youtube.com/embed/" + props.video.videoId;
    let data = {
        videoId: props.video.videoId,
        likes: likes,
        dislikes: dislikes,
        comments: props.backendData.comments
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        //textbox {form submit}
        //
        props.postBackendData(data)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="container">
                    <iframe className="video"allowFullScreen src={url} frameBorder="0"></iframe>
                </div>
                <ul className="nav bg-primary">
                    <li className="nav-item">
                        <span className="nav-link text-white h5">{props.video.title}</span>
                    </li>
                    <div className="btn-group" role="group">
                        <li className="nav-item">
                            <div className="p-2 align-text-bottom"><button className="btn btn-light btn-sm btn-outline-success" onClick={(e) => {setLikes((likes+1)); setToggle1('disabled'); handleOnClick(e)}} disabled={toggle1}>Like</button><span className="p-2 text-white">{likes}</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="p-2"><button className="btn btn-light btn-sm btn-outline-danger"onClick={(e) => {setDislikes((dislikes+1)); setToggle2('disabled'); handleOnClick(e)}} disabled={toggle2}>Dislike</button><span className="p-2 text-white">{dislikes}</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="p-2"><Button variant="light outline-secondary"onClick={() => setOpen(!open)} aria-controls="description" aria-expanded={open}>Description</Button></div>
                        </li>
                    </div>
                    <div className="p-4 align-text-center">
                        <Collapse in={open} alignment="center">
                            <Card id="description">
                                <Card.Body><p>{props.video.description}</p></Card.Body>
                            </Card>
                        </Collapse>
                    </div>  
                </ul>
            </div>
        </div>
    )
}

export default VideoPlayer;