import React from 'react';

const Card = ({id, question, hint, answer}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="front">
                    <div className="question">{question}</div>
                    <div className="hint">{hint}</div>
                </div>
                <div className="back">
                    <div className="answer">{answer}</div>
                </div>
            </div>
        </div>
    )
}

export default Card