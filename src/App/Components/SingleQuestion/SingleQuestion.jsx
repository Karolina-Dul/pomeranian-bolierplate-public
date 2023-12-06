import React, { useState } from 'react';
import './styles.css';
import { Arrow } from '../Icons/Arrow';

export const FaqQuestions = (props) => {
  const { question, answer } = props;

  const [isQuestionClicked, setQuestionClicked] = useState(false);

  function clickAnswer() {
    setQuestionClicked(!isQuestionClicked);
  }

  return (
    <div className="border-open">
      <div className="arrow-question-container">
        <button
          className={`${isQuestionClicked ? 'activeArrow' : 'inactiveArrow'}`}
          onClick={clickAnswer}
        >
          <Arrow />
        </button>
        <button className="question" onClick={clickAnswer}>
          {question}
        </button>
      </div>
      <hr className="line" />
      {isQuestionClicked && <p className="answer">{answer}</p>}
    </div>
  );
};
