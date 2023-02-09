import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/admin/booking.css";

function createData(
  Booking_ID,
  Customer_ID,
  Car_ID,
  Driver_ID,
  Pick_Up_Date,
  Pick_Up_Time,
  Drop_Of_Date,
  Drop_Of_Time,
  Rent_Price
) {
  return {
    Booking_ID,
    Customer_ID,
    Car_ID,
    Driver_ID,
    Pick_Up_Date,
    Pick_Up_Time,
    Drop_Of_Date,
    Drop_Of_Time,
    Rent_Price,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Booking = () => {
  return (
    <div className="table_booking">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Booking_ID</TableCell>
              <TableCell align="right">Customer_ID</TableCell>
              <TableCell align="right">Car_ID</TableCell>
              <TableCell align="right">Driver_ID</TableCell>
              <TableCell align="right">Pick_Up_Date</TableCell>
              <TableCell align="right">Drop_Of_Date</TableCell>
              <TableCell align="right">Drop_Of_Time</TableCell>
              <TableCell align="right">Rent_Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Booking;
