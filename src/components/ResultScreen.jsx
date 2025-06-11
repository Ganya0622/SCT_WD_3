import React from "react";

const ResultScreen = ({ score, total, userAnswers, quizData, onRestart }) => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        background: "rgba(255 255 255 / 0.95)",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>
        Quiz Completed!
      </h1>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Your Score: {score} / {total}
      </h2>

      <div>
  {quizData.map((q, idx) => {
    const userResponse = userAnswers[idx];
    let isSkipped = false;
    let isCorrect = false;

    // handle skipped
    if (q.type === "fill" || q.type === "truefalse") {
      isSkipped = !userResponse || userResponse.toString().trim() === "";
    } else {
      isSkipped = !userResponse || userResponse.length === 0;
    }

    // handle correctness
    if (!isSkipped) {
      if (q.type === "single" || q.type === "multi") {
        const correctIndexes = q.correctAnswer || [];
        isCorrect =
          userResponse.length === correctIndexes.length &&
          userResponse.every((val) => correctIndexes.includes(val));
      } else {
        isCorrect =
          userResponse.toString().trim().toLowerCase() ===
          q.answer.toString().trim().toLowerCase();
      }
    }

    return (
      <div
        key={q.id}
        style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: isSkipped
            ? "#fff3cd" // yellow
            : isCorrect
            ? "#d4edda" // green
            : "#f8d7da", // red
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          Q{idx + 1}: {q.question}
        </p>

        {isSkipped ? (
          <p style={{ fontStyle: "italic" }}>You skipped this question.</p>
        ) : q.type === "single" || q.type === "multi" ? (
          <>
            <p>
              Your answer: {userResponse.map((i) => q.options[i]).join(", ")}
            </p>
            <p>
              Correct answer: {q.correctAnswer.map((i) => q.options[i]).join(", ")}
            </p>
          </>
        ) : (
          <>
            <p>Your answer: {userResponse}</p>
            <p>Correct answer: {q.answer}</p>
          </>
        )}
      </div>
    );
  })}
</div>


      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={onRestart}
          style={{
            backgroundColor: "#ff6f61",
            border: "none",
            padding: "15px 40px",
            borderRadius: "8px",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(255, 111, 97, 0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff503f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
