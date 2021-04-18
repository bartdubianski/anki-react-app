import React, {useState} from 'react';
import { firebase } from './initFirebase'
import { useHistory } from 'react-router-dom'

const db = firebase.database();
const questionText = "Enter the question";
const hintText = "Enter the hint";
const answerText = "Enter the answer";

const AddCard = () => {

    const [question, setQuestion] = useState(questionText);
    const [hint, setHint] = useState(hintText);
    const [answer, setAnswer] = useState(answerText);
    const [message, setMessage] = useState("");
    const [deck, setDeck] = useState("general");
    const history = useHistory();

    return (
        <>
        <h1>Add New Card</h1>
            <select>
                <option value="basic">Basic Flashcard</option>
            </select>
            <p>New Card</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const cardsRef = db.ref("cards");
                    const newCardRef = cardsRef.push();
                    newCardRef.set({
                        question,
                        hint,
                        answer,
                        familiarity: 1,
                        cardDue: true,
                        deck
                    });
                    setQuestion(questionText);
                    setHint(hintText);
                    setAnswer(answerText);
                    setMessage("Card added to the database!")
                }}
            >
                <label>
                    Question:
                    <input 
                        type="text"
                        name="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </label>
                <label>
                    Hint:
                    <input 
                        type="text"
                        name="hint"
                        value={hint}
                        onChange={(e) => setHint(e.target.value)}
                    />
                </label>
                <label>
                    Answer:
                    <input 
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </label>
            
                <select>
                    <option value="general">General</option>
                </select>
                <button type="submit">Add Card</button>
            </form>
            <p>{message}</p>
            </>
    );
};

export default AddCard;