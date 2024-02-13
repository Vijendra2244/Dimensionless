import React, { useEffect, useRef } from "react";
import { Bubble } from "react-chartjs-2";

function BubbleChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartId = "bubble-chart";

  const data = {
    datasets: [
      {
        label: "Bubble Chart Example",
        data: [
          { x: 5, y: 25, r: 10 },
          { x: 10, y: 10, r: 5 },
          { x: 15, y: 15, r: 10 },
          { x: 25, y: 45, r: 20 },
          { x: 30, y: 40, r: 10 },
          { x: 35, y: 30, r: 5 },
          { x: 45, y: 25, r: 5 },
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 0, 0, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 99, 132, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
          "rgba(54, 162, 235, 0.9)",
        ],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
          },
        },
      ],
    },
  };

  return <Bubble ref={chartRef} id={chartId} data={data} options={options} />;
}

export default BubbleChart;
