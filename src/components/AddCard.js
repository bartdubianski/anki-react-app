import React, {useState} from 'react';
import { firebase } from './initFirebase';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const db = firebase.database();
const questionText = "Enter the question";
const hintText = "Enter the hint";
const answerText = "Enter the answer";

const AddCard = () => {

    const [question, setQuestion] = useState(questionText);
    const [hint, setHint] = useState(hintText);
    const [answer, setAnswer] = useState(answerText);
    const [message, setMessage] = useState("");

    return (
        <Container>
            <Row>
                <Col className="mt-3">
                    <Card>
                        <Card.Header>New Card</Card.Header>
                        <Card.Body>
                            <Form 
                                onSubmit={(e) => {
                                e.preventDefault();
                                const cardsRef = db.ref("cards");
                                const newCardRef = cardsRef.push();
                                newCardRef.set({
                                    question,
                                    hint,
                                    answer,
                                    familiarity: 1,
                                    cardDue: true
                                });
                                setQuestion(questionText);
                                setHint(hintText);
                                setAnswer(answerText);
                                setMessage("New Card added to the Deck!")
                             }}>
                                <Form.Group controlID="addCardQuestion">
                                    <Form.Label>Question:</Form.Label>
                                    <Form.Control 
                                        size="sm"
                                        type="text"
                                        placeholder="Enter question here"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlID="addCardHint">
                                    <Form.Label>Question:</Form.Label>
                                    <Form.Control 
                                        size="sm"
                                        type="text"
                                        placeholder="Enter hint here"
                                        value={hint}
                                        onChange={(e) => setHint(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group controlID="addCardAnswer">
                                    <Form.Label>Question:</Form.Label>
                                    <Form.Control 
                                        size="sm"
                                        type="text"
                                        placeholder="Enter answer here"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        />
                                </Form.Group>
                                <Button 
                                    variant="success"
                                    type="submit"
                                    size="sm" 
                                    className="mr-1"
                                >
                                    Add Card to your Deck
                                </Button>
                            </Form>
                            <p className="mt-2">{message}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AddCard;