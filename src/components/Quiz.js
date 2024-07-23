
import React, { useState } from 'react';

// Example topics and questions data
const topics = {
  "Science": [
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    // Add more Science questions here
  ],
  "Math": [
    { question: "What is 5 + 7?", options: ["12", "14", "10", "11"], answer: "12" },
    // Add more Math questions here
  ],
  // Add more topics and questions here
  "Biology": [
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
      // Add more Science questions here
    ],
};

function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswer = (option) => {
    if (option === topics[selectedTopic][currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < topics[selectedTopic].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      {!selectedTopic ? (
        <div>
          <h2>Select a Topic</h2>
          {Object.keys(topics).map((topic, index) => (
            <button key={index} onClick={() => handleTopicSelect(topic)}>
              {topic}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {quizCompleted ? (
            <div>
              <h3>Quiz Completed!</h3>
              <p>Your final score: {score}/{topics[selectedTopic].length}</p>
              <button onClick={() => handleTopicSelect(null)}>
                Select Another Topic
              </button>
            </div>
          ) : (
            <div>
              <p>{topics[selectedTopic][currentQuestionIndex].question}</p>
              <div>
                {topics[selectedTopic][currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;