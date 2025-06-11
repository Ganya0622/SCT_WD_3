import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div
      className="start-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to the React & HTML Quiz!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Test your knowledge by answering the questions on HTML and React.
      </p>
      <button
        onClick={onStart}
        style={{
          backgroundColor: "#ff6f61",
          border: "none",
          padding: "15px 40px",
          borderRadius: "8px",
          color: "white",
          fontSize: "1.2rem",
          cursor: "pointer",
          boxShadow:
            "0 4px 15px rgba(255, 111, 97, 0.6)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = "#ff503f")
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = "#ff6f61")
        }
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
