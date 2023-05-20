import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LocationItem = ({ location, isActive }) => {
    const { name, image } = location;
    let navigate = useNavigate();
    return (
        <Card className={`bg-transparent ${isActive ? 'active' : 'not-active'}`} onClick={() => navigate(`/booking/${name}`)}>
            <Card.Img variant="top" className="img-fluid" src={image} />
            <Button className="bg-transparent place-name-card">{name}</Button>
        </Card>
    );
};

export default LocationItem;