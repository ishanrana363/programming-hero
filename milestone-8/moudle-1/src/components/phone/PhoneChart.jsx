import axios from "axios";
import React, { useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const PhoneChart = () => {
  const [phoneData, setPhoneData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((data) => {
        const phoneData = data.data.data;
        const fakeData = phoneData.map((phone) => {
          
          return {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]), // price estimate করা হচ্ছে
          };
        });
        setPhoneData(fakeData); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Phone Price Chart</h1>
      <ResponsiveContainer width="80%" height={500}>
        <LineChart width={1500} height={900} data={phoneData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PhoneChart;
