import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

<<<<<<< HEAD
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];
=======
// const data = [
//   { name: "January", Total: 120000 },
//   { name: "February", Total: 21000 },
//   { name: "March", Total: 80000 },
//   { name: "April", Total: 160000 },
//   { name: "May", Total: 90000 },
//   { name: "June", Total: 50000 },
//   { name: "June", Total: 48000 },
// ];

// const Chart = ({ aspect, title }) => {
//   return (
//     <div className="chart">
//       <div className="title">{title}</div>
//       <ResponsiveContainer width="100%" aspect={aspect}>
//         <AreaChart
//           width={730}
//           height={250}
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#1778c5" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#1778c5" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" stroke="gray" />
//           <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="Total"
//             stroke="#1778c5"
//             fillOpacity={1}
//             fill="url(#total)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;

import React, { useEffect, useState } from 'react';
import './chart.scss';
import './Chart.css'
import axios from 'axios';

const Chart = ({ title }) => {
  const [dailyRevenue, setDailyRevenue] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/PaymentDetails')
      .then((res) => {
        setDailyRevenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Calculate the maximum revenue value in the data
  const maxRevenue = Math.max(...dailyRevenue.map((item) => item.Amount));

  // Group the data by date and calculate the total revenue for each date
  const revenueByDate = dailyRevenue.reduce((acc, item) => {
    const date = item.Transferred_at.split('T')[0];
    if (acc[date]) {
      acc[date] += item.Amount;
    } else {
      acc[date] = item.Amount;
    }
    return acc;
  }, {});

  // Extract the dates from the revenueByDate object and sort them
  const dates = Object.keys(revenueByDate).sort();

  // Calculate the height of the graph area
  const graphHeight = 200;

  // Set the desired spacing and width of bars
  const barSpacing = 30;
  const barWidth = 50;
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
