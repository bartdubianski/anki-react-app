import React, { useState } from 'react';
import { firebase } from './initFirebase';
import { Button, Form, Card, Container, Row, Col, Alert } from 'react-bootstrap';
const questionPlaceholder = "Enter the question";
const hintPlaceholder = "Enter the hint";
const answerPlaceholder = "Enter the answer";
const successMessage = "Card succesffully added to the Study Deck"

const CardForm = () => {
    const [question, setQuestion] = useState("");
    const [hint, setHint] = useState("");
    const [answer, setAnswer] = useState("");
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [validationErrors,setValidationErrors] = useState({});
    
    const submitCardForm = () => {
        const isValid = formValidation();
        if (isValid) {
            const cardsRef = firebase.database().ref("cards");
            cardsRef.off("value");
            const newCardRef = cardsRef.push();
            newCardRef.set({
                question,
                hint,
                answer,
                familiarity: 1,
                cardDue: true
            });
            setQuestion("");
            setHint("");
            setAnswer("");
        }
    }

    const formValidation = () => {
        const errorMessages = {};
        let isValid = true;
        setValidationSuccess(false);
        if(question.trim().length < 1) {
            errorMessages.questionError = "Enter Question in the field - it cannot be empty";
            isValid = false;
        }
        if(answer.trim().length < 1) {
            errorMessages.answerError = "Enter Answer in the field - it cannot be empty";
            isValid = false;
        }
        setValidationErrors(errorMessages);

        if (isValid) {
            setValidationSuccess(true);
        }

        return isValid;
    }

    return (
        <Container>
            <Row>
                <Col className="mt-3">
                    <Card>
                        <Card.Header>New Card</Card.Header>
                        <Card.Body>
                            <Form onSubmit={(e) => {
                                    e.preventDefault();
                                    submitCardForm();
                                }}>
                                <Form.Group controlId="editCardQuestion">
                                    <Form.Label>Question:</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        name="question"
                                        placeholder={questionPlaceholder}
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="editCardHint">
                                    <Form.Label>Hint:</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        name="hint"
                                        placeholder={hintPlaceholder}
                                        value={hint}
                                        onChange={(e) => setHint(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="editCardAnswer">
                                    <Form.Label>Answer:</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        name="answer"
                                        placeholder={answerPlaceholder}
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    size="sm"
                                    className="mb-3"
                                >
                                    Save Card
                                </Button>
                            </Form>
                            {Object.keys(validationErrors).map((key)=>{
                                return <Alert variant={`danger`}>{validationErrors[key]}</Alert>
                            })}
                            {validationSuccess && <Alert variant="success">{successMessage}</Alert>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardForm;