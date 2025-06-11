import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import ProgressBar from "./components/ProgressBar";
import { quizData } from "./data/quizData";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [gameState, setGameState] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // array of arrays
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setGameState("quiz");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  const updateAnswer = (selectedOptions) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOptions;
    setUserAnswers(newAnswers);
  };

  const calculateScore = (answers) => {
  let newScore = 0;
  answers.forEach((ans, idx) => {
    const question = quizData[idx];
    if (!question || ans === undefined || ans === null) return;

    if (question.type === "single" || question.type === "multi") {
      const correct = question.correctAnswer;
      if (!correct || !Array.isArray(correct)) return;
      const isCorrect =
        ans.length === correct.length && ans.every((val) => correct.includes(val));
      if (isCorrect) newScore++;
    } else if (question.type === "fill") {
      const correct = question.answer?.toLowerCase().trim();
      const userAns = String(ans).toLowerCase().trim();
      if (userAns === correct) newScore++;
    } else if (question.type === "truefalse") {
      if (String(ans).toLowerCase() === String(question.answer).toLowerCase()) {
        newScore++;
      }
    }
  });
  setScore(newScore);
};

  const nextQuestion = () => {
    // Store answer is done in QuestionCard via updateAnswer + onNext
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score before result
      calculateScore(userAnswers);
      setGameState("result");
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const restartQuiz = () => {
    setGameState("start");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <>
      {gameState === "start" && <StartScreen onStart={startQuiz} />}

      {gameState === "quiz" && (
        <div data-aos="fade-up" style={{ padding: "20px" }}>
          <ProgressBar current={currentQuestionIndex + 1} total={quizData.length} />
          <QuestionCard
            questionObj={quizData[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizData.length}
            onAnswerUpdate={updateAnswer}
            onNext={nextQuestion}
            onPrev={prevQuestion}
            userSelected={userAnswers[currentQuestionIndex] || []}
          />
        </div>
      )}

      {gameState === "result" && (
        <ResultScreen
          score={score}
          total={quizData.length}
          userAnswers={userAnswers}
          quizData={quizData}
          onRestart={restartQuiz}
        />
      )}
    </>
  );
};

export default App;
