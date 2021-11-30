import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const VideoCard = props => {

    const handleOnClick = (e) => {
    e.preventDefault();
    props.searchVideo(props.videoId);
}

    return (
        <div>
            <ErrorBoundary>
                <Card>
                    <Card.Img variant="top" src={props.thumbnail} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Button variant="primary" onClick={(e) => {handleOnClick(e)}}>Go</Button>
                    </Card.Body>
                </Card>
            </ErrorBoundary>
        </div>
    );
}

export default VideoCard;