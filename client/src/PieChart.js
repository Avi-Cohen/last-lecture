import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({randSet, countries}) => {
  const pieData = {
    labels: countries,
    datasets: [
      {
        label: "# of Votes",
        data: randSet,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 109, 64, 0.6)",
          "rgba(125, 169, 34, 0.8)",
          "rgba(225, 99, 251, 0.3)",
          "rgba(225, 99, 101, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 109, 64, 0.6)",
          "rgba(125, 169, 34, 0.8)",
          "rgba(225, 99, 251, 0.3)",
          "rgba(225, 99, 101, 0.4)",
        ],
        // borderWidth: 1,
        //hoverOffset:20
        // offset: [20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };
  return (
    <div style={{ width: "20rem" }}>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
