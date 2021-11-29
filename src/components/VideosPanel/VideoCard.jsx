import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VideoCard = props => {
    return (
        <Card>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}

export default VideoCard;