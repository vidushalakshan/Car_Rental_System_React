import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/admin/admin.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SlideNavBar from "./SlideNavBar";
import TopNavBar from "./TopNavBar";
import { styled, alpha } from "@mui/material/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createData(
  Admin_Id,
  Full_Name,
  Address,
  Mobile_Number,
  Password,
  Email
) {
  return {
    Admin_Id,
    Full_Name,
    Address,
    Mobile_Number,
    Password,
    Email,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Admin = () => {

  const url = ""
  const [data, setData]=useState({
    id: "",
    name: "",
    address: "",
    number: "",
    password: "",
    email: ""
  })

  function handle (e) {
    const newdata= {...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={3}>
        <SlideNavBar />
        <Grid item xs={9}>
          <Item>
            <TopNavBar />

            {/* Start textField content */}
            <form>
              <div className="txtAdmin">
                <TextField
                  id="standard-textarea"
                  label="Admin_ID"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.id}
                />
                <TextField
                  id="standard-textarea"
                  label="Full_Name"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.name}
                />
                <TextField
                  id="standard-textarea"
                  label="Address"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.address}
                />
                <TextField
                  id="standard-textarea"
                  label="Mobile_Number"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.number}
                />
                <TextField
                  id="standard-textarea"
                  label="Password"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.password}
                />
                <TextField
                  id="standard-textarea"
                  label="Email"
                  multiline
                  variant="standard"
                  onChange={(e) => handle(e)}
                  value={data.email}
                />
              </div>

              {/* End textField content */}

              {/* Start button content */}

              <div className="btnAdmin">
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary" type="submit">
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
            </form>

            {/* End button content */}

            {/* Start table content */}
            <div className="table_admin">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1150 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Admin_ID</TableCell>
                      <TableCell align="right">Full_Name</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">Mobile_Number</TableCell>
                      <TableCell align="right">Password</TableCell>
                      <TableCell align="right">Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
