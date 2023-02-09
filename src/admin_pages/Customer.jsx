import React from "react";
import "../styles/admin/customer.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
    Customer_Id,
    Name,
    Nic_Name,
    Address,
    Mobile_Number,
    Email
  ) {
    return {
        Customer_Id,
        Name,
        Nic_Name,
        Address,
        Mobile_Number,
        Email
    };
  }

  
const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

const Customer = () => {
    return (
        <>
        <div className="table_customer">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Customer_Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Nic_Name</TableCell>
                <TableCell align="right"> Address</TableCell>
                <TableCell align="right"> Mobile_Number</TableCell>
                <TableCell align="right">Email</TableCell>
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
        </>
    )
}

export default Customer;