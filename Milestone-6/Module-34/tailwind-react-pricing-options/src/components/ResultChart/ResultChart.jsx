import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Rahim", physics: 85, chemistry: 78, math: 92 },
  { id: 2, name: "Karim", physics: 74, chemistry: 81, math: 69 },
  { id: 3, name: "Ayesha", physics: 91, chemistry: 88, math: 95 },
  { id: 4, name: "Nusrat", physics: 67, chemistry: 73, math: 70 },
  { id: 5, name: "Sakib", physics: 88, chemistry: 84, math: 79 },
  { id: 6, name: "Tanvir", physics: 72, chemistry: 65, math: 74 },
  { id: 7, name: "Mim", physics: 94, chemistry: 90, math: 97 },
  { id: 8, name: "Arif", physics: 59, chemistry: 68, math: 63 },
  { id: 9, name: "Farhan", physics: 81, chemistry: 77, math: 85 },
  { id: 10, name: "Tania", physics: 76, chemistry: 82, math: 80 },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
