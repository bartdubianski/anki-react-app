import React, { useEffect, useState } from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { firebase } from './initFirebase';


const CardList = () => {
    const [addCard, setAddCard] = useState(false);
    const [cardsList, setCardsList] = useState();

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

    return (
        <div>
            <h1>Card List:</h1>
            {cardsList ? cardsList.map((card) => (
                <Card
                    key={card.key}
                    question={card.question}
                    hint={card.hint}
                    answer={card.answer}
                />
                ))
                : ''}
            <button 
                onClick={() => setAddCard(true)}
            >
            Add New Card
            </button>
            {addCard 
                ? <AddCard />
                : ""
            }
        </div>
    );
};

export default CardList;