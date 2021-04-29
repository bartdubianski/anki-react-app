import React from 'react';
import { Card, Button } from 'react-bootstrap'



const AnkiCard = ({key, question, hint, answer}) => {

    return (
        <Card className="mb-3">
            <Card.Header>
                Card ID #{key}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {question}
                </Card.Title>
                <Card.Subtitle>
                    {hint}
                </Card.Subtitle>
                <Card.Text>
                    {answer}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="secondary" size="sm" className="mr-1">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
            </Card.Footer>
        </Card>
    );
}

export default AnkiCard;