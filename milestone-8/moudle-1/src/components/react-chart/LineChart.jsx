import React from "react";
import { LineChart as Lchart, Line, Tooltip, XAxis,YAxis } from "recharts";

const LineChart = () => {
  const data = [
    { student_name: "Alice", Physics: 85, Chemistry: 90, Biology: 88 },
    { student_name: "Bob", Physics: 78, Chemistry: 82, Biology: 80 },
    { student_name: "Charlie", Physics: 92, Chemistry: 88, Biology: 94 },
    { student_name: "David", Physics: 66, Chemistry: 70, Biology: 65 },
    { student_name: "Eva", Physics: 88, Chemistry: 85, Biology: 90 },
    { student_name: "Frank", Physics: 75, Chemistry: 78, Biology: 72 },
    { student_name: "Grace", Physics: 90, Chemistry: 92, Biology: 91 },
    { student_name: "Henry", Physics: 82, Chemistry: 84, Biology: 78 },
    { student_name: "Ivy", Physics: 95, Chemistry: 93, Biology: 96 },
    { student_name: "Jack", Physics: 70, Chemistry: 75, Biology: 72 },
  ];
  return (
    <div>
      <h1 className="text-center"> chart </h1>
      <Lchart width={800} height={500} data={data}>
        <XAxis dataKey="student_name" />
        <YAxis />
        <Tooltip />
        <Line dataKey={"Physics"} stroke="red"></Line>
        <Line dataKey={"Chemistry"} stroke="green" />
        <Line dataKey={"Biology"} stroke="navy" />
      </Lchart>
    </div>
  );
};

export default LineChart;
