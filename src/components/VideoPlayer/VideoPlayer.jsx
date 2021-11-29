import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    let url = "https://www.youtube.com/embed/" + props.video.videoId;
    const [open, setOpen] = useState(false);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="container">
                    <iframe className="video"allowFullScreen src={url} frameBorder="0"></iframe>
                </div>
                <br/>
                <ul className="nav bg-primary">
                    <div className="row">    
                        <li className="nav-item">
                            <span className="nav-link text-white h5">{props.video.title}</span>
                        </li>
                    </div>
                    <li className="nav-item">
                        <div className="p-2"><button className="btn btn-light btn-sm btn-outline-secondary">Like</button><span className="p-2 text-white">{props.backendData.likes}</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="p-2"><button className="btn btn-light btn-sm btn-outline-secondary">Dislike</button><span className="p-2 text-white">{props.backendData.dislikes}</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="p-2"><Button variant="light outline-secondary"onClick={() => setOpen(!open)} aria-controls="description" aria-expanded={open}>Description</Button></div>
                    </li> 
                </ul> 
            </div>
            <div className="row">
                <div>
                    <Collapse in={open}>
                        <Card id="description">
                            <Card.Body>{props.video.description}</Card.Body>
                        </Card>
                    </Collapse>
                </div>
            </div>    
        </div>
    )
}

export default VideoPlayer;