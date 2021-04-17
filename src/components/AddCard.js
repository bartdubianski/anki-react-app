import React from 'react';

const AddCard = () => {
    return (
        <>
        <h1>Add New Card</h1>
            <select>
                <option value="basic">Basic Flashcard</option>
            </select>
            <p>New Card</p>
            <form>
                <label>
                    Question:
                    <input type="text" name="question"/>
                </label>
                <label>
                    Hint:
                    <input type="text" name="hint"/>
                </label>
                <label>
                    Answer:
                    <input type="text" name="answer"/>
                </label>
            
                <select>
                    <option value="deck1">Deck 1</option>
                </select>
                <input type="submit" value="Add Card"/>
            </form>
            </>
    );
};

export default AddCard;