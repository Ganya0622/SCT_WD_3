import React, { useState } from "react";
import "../App.css";

const QuestionCard = ({
  questionObj,
  currentQuestionIndex,
  totalQuestions,
  onAnswerUpdate,
  onNext,
  onPrev,
  userSelected
}) => {
  const [selectedOptions, setSelectedOptions] = useState(userSelected || []);

  const handleOptionChange = (index) => {
    if (questionObj.type === "multi") {
      const newSelected = selectedOptions.includes(index)
        ? selectedOptions.filter((i) => i !== index)
        : [...selectedOptions, index];
      setSelectedOptions(newSelected);
      onAnswerUpdate(newSelected);
    } else {
      setSelectedOptions([index]);
      onAnswerUpdate([index]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedOptions([value]);
    onAnswerUpdate([value]);
  };

  const handleTrueFalse = (value) => {
    setSelectedOptions([value]);
    onAnswerUpdate([value]);
  };

  const renderOptions = () => (
    <ul className="answers-list">
      {questionObj.options.map((option, index) => (
        <li key={index}>
          <label
            className={`option ${selectedOptions.includes(index) ? "selected" : ""}`}
          >
            <input
              type={questionObj.type === "multi" ? "checkbox" : "radio"}
              name="option"
              value={index}
              checked={selectedOptions.includes(index)}
              onChange={() => handleOptionChange(index)}
              style={{ display: "none" }}
            />
            {option}
          </label>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="glass-card">
      <h2>
        Question {currentQuestionIndex + 1} / {totalQuestions}
      </h2>
      <p style={{ marginBottom: "1rem" }}>{questionObj.question}</p>

      {questionObj.type === "single" || questionObj.type === "multi"
        ? renderOptions()
        : questionObj.type === "fill"
        ? <input
            type="text"
            placeholder="Type your answer here..."
            value={selectedOptions[0] || ""}
            onChange={handleInputChange}
            style={{ padding: "12px 16px", width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        : questionObj.type === "truefalse" && (
            <div className="answers-list">
              {["True", "False"].map((option, index) => (
                <label
                  key={option}
                  className={`option ${selectedOptions[0] === option ? "selected" : ""}`}
                  onClick={() => handleTrueFalse(option)}
                >
                  {option}
                </label>
              ))}
            </div>
          )}

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button className="prev-btn" onClick={onPrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button className="next-btn" onClick={onNext}>
          {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;