import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap'
import { firebase } from './initFirebase';

const AnkiCard = ({ card }) => {
    const [question, setQuestion] = useState(card.question);
    const [hint, setHint] = useState(card.hint);
    const [answer, setAnswer] = useState(card.answer);
    const [editMode, setEditMode] = useState(true);

    const deleteCard = () => {
        const cardsRef = firebase.database().ref("cards").child(card.id);
        cardsRef.remove();
    }
    const switchEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true);
    }
    const updateCard = () => {
        const cardsRef = firebase.database().ref("cards").child(card.id);
        cardsRef.update({
            question: question,
            hint: hint,
            answer: answer
        });
        switchEditMode();
    }
    let cardDisplayMode
    if (editMode === true) {
        cardDisplayMode = (
            <Card.Body>
                <h5>{card.question}</h5>
                <h6 className="text-muted">{card.hint === "" ? "Card created without a hint" : card.hint }</h6>
                <p className="cardDivide" />
                <h5>{card.answer}</h5>
            </Card.Body>
        )
    } else {
        cardDisplayMode = (
            <Card.Body>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    updateCard();
                }}>
                    <Form.Group controlId="editCard">
                        <Form.Control
                            size="sm"
                            type="text"
                            name="question"
                            className="h5"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <Form.Control
                            size="sm"
                            type="text"
                            name="hint"
                            className="h5"
                            value={hint}
                            onChange={(e) => setHint(e.target.value)}
                        />
                        <Form.Control
                            size="sm"
                            type="text"
                            name="answer"
                            className="h5"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Card.Body>
        )
    }
    return (
        <>
            <Card className="mb-3 text-center">
                <Card.Header>
                    <small>Card UID #{card.id}</small>
                </Card.Header>
                {cardDisplayMode}
                <Card.Footer>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="mr-1"
                        onClick={switchEditMode}
                    >
                        {editMode ? "Edit" : "Cancel"}
                    </Button>
                    {!editMode ? <Button variant="success" size="sm" className="mr-1" onClick={updateCard}>Save Changes</Button> : ""}
                    <Button
                        variant="danger"
                        size="sm"
                        className="mr-1"
                        onClick={deleteCard}
                    >
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default AnkiCard;