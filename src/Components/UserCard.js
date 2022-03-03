import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const UserCard = ({ el }) => {
    return (
        <div>
            <Card style={{ width: "18rem", display: "flex" }}>
                {" "}
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>{el.username}</Card.Text>
                    <Card.Text>{el.website}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserCard;
