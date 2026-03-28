import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarkChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // Data processing for the chart....
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.chemistry + student.physics + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);

  return (
    <div className="flex justify-center">
      <BarChart width={1000} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarkChart;
