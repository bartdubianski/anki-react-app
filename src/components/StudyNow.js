import React, {useState, useEffect} from 'react';
import AnkiCard from './AnkiCard';
import { firebase } from './initFirebase';
import { Container, Row, Col, Button } from 'react-bootstrap';

const StudyNow = () => {
    const [cardsList, setCardsList] = useState([]);
    const [currentCard, setCurrentCard] = useState([]);
    const [startLearning, setStartLearning] = useState(false);
    
    useEffect(() =>{
        const cardsRef = firebase.database().ref("cards");
        cardsRef.on("value", (snapshot)=>{
            const cards = snapshot.val();
            const cardsList = [];
            for (let id in cards){
                cardsList.push(cards[id]);
            }
            setCardsList(cardsList);
        });
    }, [])

    const showRandomCardHandler = () => {
    let cardID = [Math.floor(Math.random() * cardsList.length)];
    setCurrentCard(cardsList[cardID]);
    }

    const startLearningHandler = () => {
        setStartLearning(true);
        showRandomCardHandler();
    }


    return (
        <Container>
            <Row className="mt-4">
                <Col>
                {startLearning ? (
                        <AnkiCard
                            key={currentCard.id}
                            question={currentCard.question}
                            hint={currentCard.hint}
                            answer={currentCard.answer}
                        />
                )
                : ''}
                </Col>
            </Row>
                {startLearning 
                    ? <Button 
                        className="mt-2 mb-4"
                        onClick={startLearningHandler}
                    >
                        Next Card
                    </Button>
                    : <Button 
                    size="lg"
                    className="mt-2 mb-4"
                    onClick={startLearningHandler}
                    >
                        Stard New Session
                    </Button>
                }
                
            
        </Container>
    );
};

export default StudyNow;