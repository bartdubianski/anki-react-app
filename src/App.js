import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';


const App = () => {
  const cardList = [
    {id: 1, question: "1 pytanie", hint: "1 podpowiedz", answer: "1 odpowiedz"},
    {id: 2, question: "2 pytanie", hint: "2 podpowiedz", answer: "2 odpowiedz"},
    {id: 3, question: "3 pytanie", hint: "3 podpowiedz", answer: "3 odpowiedz"}
  ];

  const [currentCard, setCurrentCard] = useState(cardList[0]);

  const showRandomCardHandler = () => {
    let cardID = [Math.floor(Math.random() * cardList.length)];
    setCurrentCard(cardList[cardID]);
  }

  return (
    <div className="App">
      <div className="card">
        <Card 
          key={currentCard.id}
          question={currentCard.question}
          hint={currentCard.hint}
          answer={currentCard.answer}
        />
      </div>
      <button 
        className="btn"
        onClick={showRandomCardHandler}>
            Następna Karta
      </button>
    </div>
  )
}

export default App;
