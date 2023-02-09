import React from "react";
import "../styles/admin/car.css";
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

function createData(
  Register_Num,
  Car_Availability,
  Car_Brand,
  Car_Type,
  Car_Color,
  Transmission_Type,
  No_Of_Passanger,
  Daily_Rate,
  Monthly_Rate,
  Damage_Price
) {
  return {
    Register_Num,
    Car_Availability,
    Car_Brand,
    Car_Type,
    Car_Color,
    Transmission_Type,
    No_Of_Passanger,
    Daily_Rate,
    Monthly_Rate,
    Damage_Price,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Cars = () => {
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

      <div className="txtAdmin">
        <TextField
          id="standard-textarea"
          label="Register_Number"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Car_Availability"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Car_Brand"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Car_Type"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Car_Color"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Transmission_Type"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="No_Of_Passanger"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Daily_Rate"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Monthly_Rate"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Price_Extra_KM"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Damage_Price"
          multiline
          variant="standard"
        />
      </div>

      {/* End textField content */}

      {/* Start button content */}

      <div className="btnCars">
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

      {/* Start table content */}
      <div className="table_content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Reg_Num</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Transmisson</TableCell>
                <TableCell align="right">No_Of_Passanger</TableCell>
                <TableCell align="right">Daily_Rate</TableCell>
                <TableCell align="right">Monthly_Rate</TableCell>
                <TableCell align="right">Price_Extra_KM</TableCell>
                <TableCell align="right">Damage_Price</TableCell>
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

export default Cars;
