import React, {useState, useEffect} from 'react';
import Card from './Card';
import { firebase } from './initFirebase';

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
        <div>
            <h1>Study Cards</h1>
            <button 
                className="btn"
                onClick={startLearningHandler}
            >
            {startLearning ? "Next Card" : "Start Studying"}
            </button>
            {startLearning ? (
                    <Card
                        key={currentCard.id}
                        question={currentCard.question}
                        hint={currentCard.hint}
                        answer={currentCard.answer}
                    />
            )
            : ''}
        </div>
    );
};

export default StudyNow;