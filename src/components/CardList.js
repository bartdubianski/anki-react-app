import React, { useEffect, useState } from 'react';
import AnkiCard from './AnkiCard';
import { firebase } from './initFirebase';
import { Container, Row, Col } from 'react-bootstrap';

const CardList = () => {
    const [cardsList, setCardsList] = useState();
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
    return (
        <Container>
            <Row>
                {cardsList && cardsList.map((card) => (
                    <Col md={4} className="mt-3" key={`${card.id}`}>
                        <AnkiCard
                            card={card}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardList;