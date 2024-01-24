import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutExample: React.FC = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 40, 15, 5],
        backgroundColor: [
          "#E5A500",
          "#956F00",
          "#5E4200",
          "#FFDDB6",
          "#FFC879",
        ],
      },
    ],
  };

  const options = {};
  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutExample;
