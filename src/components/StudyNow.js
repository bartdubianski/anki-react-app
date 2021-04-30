import React, { useState, useEffect } from 'react';
import { firebase } from './initFirebase';
import { Container, Row, Col, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

const StudyNow = () => {
    const [cardsList, setCardsList] = useState([]);
    const [currentCard, setCurrentCard] = useState([]);
    const [startLearning, setStartLearning] = useState(true);
    const [showHint, setShowHint] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    useEffect(() => {
        const cardsRef = firebase.database().ref("cards");
        cardsRef.on("value", (snapshot) => {
            const cards = snapshot.val();
            const cardsList = [];
            for (let id in cards) {
                cardsList.push({ id, ...cards[id] });
            }
            setCardsList(cardsList);
        });
    }, [])
    const showRandomCardHandler = () => {
        let cardID = [Math.floor(Math.random() * cardsList.length)];
        setCurrentCard(cardsList[cardID]);
    }
    const drawNextCard = () => {
        setStartLearning(false);
        showRandomCardHandler();
        setShowHint(false);
        setShowAnswer(false);
    }
    const toggleHint = () => {
        showHint ? setShowHint(false) : setShowHint(true);
    }

    const toggleAnswer = () => {
        showAnswer ? setShowAnswer(false) : setShowAnswer(true);
    }

    let hintButton;
    if (currentCard.hint === "") {
        hintButton = (
            <Button
                variant="Light"
                size="sm"
                disabled
            >
                Hint not available
            </Button>
        )
    } else {
        const renderHint = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                {currentCard.hint}
            </Tooltip>
        )
        hintButton = (
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400}}
                overlay={renderHint}
            >
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleHint}
                >
                    Show Hint
                </Button>
            </OverlayTrigger>
        )
    }


    return (
        <Container>
                {startLearning ? (
                    <Row className="mt-4 text-center">
                        <Col>
                            <Button
                                size="lg"
                                className="mt-2 mb-4"
                                onClick={drawNextCard}
                            >
                                Start New Study Session
                            </Button>
                        </Col>
                    </Row>
                    )
                    : (
                        <>
                        <Row className="mt-4 text-center">
                            <Col>
                                <Button
                                    variant="success"
                                    size="lg"
                                    className="mt-2 mb-4"
                                    onClick={drawNextCard}
                                >
                                    Next Card
                                </Button>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Card className="studyCard">
                                    <Card.Header>
                                        <small>Card ID #{currentCard.id}</small>
                                    </Card.Header>
                                    <Card.Body>
                                        <h3 className="mt-0 mb-3">
                                            {currentCard.question}
                                        </h3>
                                        <p className="cardDivide mb-0" />
                                        {showAnswer
                                            ?   <h3 className="mt-2">{currentCard.answer}</h3>
                                            :   <Button
                                                    variant="Light"
                                                    size="lg"
                                                    onClick={toggleAnswer}
                                                >
                                                <h3>click here to display the answer</h3>
                                                </Button>
                                        }
                                    </Card.Body>
                                    <Card.Footer>
                                        {hintButton}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        </>
                    )}
        </Container>
    );
};

export default StudyNow;