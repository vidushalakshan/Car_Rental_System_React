import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import { CalendarViewDayTwoTone } from "@mui/icons-material";
import "../styles/admin/payment.css";

function createData(
    Payment_ID,
    Drop_Of_Date,
    Drop_Of_Last_Date,
    Car_ID,
    Customer_ID,
    Driver_ID,
    Rent_Price,
    Damaging_Price,
    Discount,
    Total_Price
  ) {
    return {
        Payment_ID,
        Drop_Of_Date,
        Drop_Of_Last_Date,
        Car_ID,
        Customer_ID,
        Driver_ID,
        Rent_Price,
        Damaging_Price,
        Discount,
        Total_Price
    };
  }

  
const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];


const Payment = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* Start textField content */}

      <div className="txtPayment">
        <TextField
          id="standard-textarea"
          label="Payment_ID"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Damaging_Price"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Discount"
          multiline
          variant="standard"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Car_Availability"/>}
        />
      </div>

      {/* End textField content */}

      {/* Start button content */}

      <div className="btnAdmin">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" color="success">
            Update
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
          <Button variant="contained" color="secondary">
            Clear
          </Button>
        </Stack>
      </div>

      {/* End button content */}

      {/* start table content */}

      <div className="table_payment">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> Payment_Id</TableCell>
                <TableCell align="right">Drop_Of_Date</TableCell>
                <TableCell align="right"> Drop_Of_Last_Date</TableCell>
                <TableCell align="right">Car_ID</TableCell>
                <TableCell align="right">Customer_ID</TableCell>
                <TableCell align="right">Driver_ID</TableCell>
                <TableCell align="right">Rent_Price</TableCell>
                <TableCell align="right">Damaging_Price</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Total_Price</TableCell>
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

    </Box>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

export default Payment;
