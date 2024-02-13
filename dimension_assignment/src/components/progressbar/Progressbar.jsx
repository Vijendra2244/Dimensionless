import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

function Progressbar() {
  const percentage = 75;

  let progressBarColor;
  if (percentage >= 75) {
    progressBarColor = "#33DABF"; 
  }

  return (
    <div style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: { stroke: progressBarColor },
          trail: { stroke: "#2396D5" },
        }}
      />

    </div>
  );
}

export default Progressbar;
