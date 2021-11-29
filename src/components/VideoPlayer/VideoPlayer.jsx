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
    let url = "https://www.youtube.com/embed/" + props.video.videoId;
    let data = {
        videoId: props.video.videoId,
        likes: likes,
        dislikes: dislikes,
    }

    const handleChange = (e) => {
        if (e.target.name === "like"){
            setLikes(e.target.value);
        } else {
            setDislikes(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.postBackendData()
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
                            <div className="p-2 align-text-bottom"><button className="btn btn-light btn-sm btn-outline-success">Like</button><span className="p-2 text-white">{props.backendData.likes}</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="p-2"><button className="btn btn-light btn-sm btn-outline-danger">Dislike</button><span className="p-2 text-white">{props.backendData.dislikes}</span></div>
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