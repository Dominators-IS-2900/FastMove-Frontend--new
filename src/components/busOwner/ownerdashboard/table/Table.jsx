// import "./table.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const List = () => {
//   const rows = [
//     {
//       id: "NP-7862",
//       date: "1 March",
//       amount: 785,
//     },
    
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Bus Number</TableCell>
//             <TableCell className="tableCell">Date and Time</TableCell>
//             <TableCell className="tableCell">Revenue</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">{row.date}</TableCell>
//               <TableCell className="tableCell">{row.amount}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const Table = () => {
  const [BusIncome, setBusIncome] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/PaymentDetails')
      .then(res => {
        setBusIncome(res.data);
        console.log(BusIncome);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const formatDateTime = dateTime => {
    const formattedDateTime = new Date(dateTime).toLocaleString();
    return formattedDateTime;
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3"></div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Bus No</th>
                <th>Amount</th>
                <th>Date and Time</th>
              </tr>
            </thead>

            <tbody>
              {BusIncome.map(BusIncome => (
                <tr key={BusIncome.Bus_No}>
                  <td>{BusIncome.Bus_No}</td>
                  <td>{BusIncome.Amount}.00 Lkr</td>
                  <td>{formatDateTime(BusIncome.Transferred_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
