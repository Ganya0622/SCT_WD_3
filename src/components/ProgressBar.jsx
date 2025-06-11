import React from "react";

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div
      style={{
        height: "20px",
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${percentage}%`,
          backgroundColor: "#667eea",
          transition: "width 0.4s ease",
          borderRadius: "10px 0 0 10px",
        }}
      />
    </div>
  );
};

export default ProgressBar;
