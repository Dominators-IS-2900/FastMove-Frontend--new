// import "./chart.scss";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

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

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <svg className="chart-svg" width="600" height="400">
        
        {/* X-axis labels */}
        {dates.map((date, index) => (
          <text
            key={index}
            x={index * (barWidth + barSpacing) + barWidth / 2}
            y="380"
            className="axis-label"
            textAnchor="middle"
            fontSize="12"
          >
            {date}
          </text>
        ))}

        {/* Bars and amount labels */}
        {dates.map((date, index) => (
          <g key={index}>
            <rect
              x={index * (barWidth + barSpacing)}
              y={360 - (revenueByDate[date] / maxRevenue) * graphHeight}
              width={barWidth}
              height={(revenueByDate[date] / maxRevenue) * graphHeight}
              fill="#42b983"
            />
            <text
              x={index * (barWidth + barSpacing) + barWidth / 2}
              y={360 - (revenueByDate[date] / maxRevenue) * graphHeight - 10}
              className="amount-label"
              textAnchor="middle"
              fontSize="12"
            >
              {/* {revenueByDate[date]} */}
            </text>
            <text
              x={index * (barWidth + barSpacing) + barWidth / 2}
              y={360 - (revenueByDate[date] / maxRevenue) * graphHeight + 20}
              className="revenue-label"
              textAnchor="middle"
              fontSize="12"
            >
              Lkr{revenueByDate[date]}.00
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Chart;

