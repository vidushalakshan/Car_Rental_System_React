import React, { Component, Fragment } from "react";
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
import { useEffect, useState } from "react";
import axios, * as other from "axios";
import AdminService from "../services/AdminService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state= {
      formData: {
        id: '',
        name: '',
        address: '',
        mnumber: '',
        password: '',
        email:''
      }
    }
  }

   submitAdmin = async (e) => {
    e.preventDefault();
    let formData = this.state.formData;
    let res = await AdminService.postAdmin(formData);

    console.log(res);
  }

  render() {
    return (
      <Box
        sx={{
          "& .MuiTextField-root": { m: 3, width: "35ch" },
        }}
      >
        <Grid container spacing={3}>
          <SlideNavBar />
          <Grid item xs={9}>
            <Item>
              <TopNavBar />

              {/* Start textField content */}
              <form  onSubmit={this.submitAdmin} >
                <div className="txtAdmin">
                  <TextField
                    id="id"
                    label="Admin_ID"
                    multiline
                    variant="standard"
                    value={this.state.formData.id}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.id=e.target.value
                      this.setState({formData})
                    }}
                  />
                  <TextField
                    id="name"
                    label="Full_Name"
                    multiline
                    variant="standard"
                    value={this.state.formData.name}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.name=e.target.value
                      this.setState({formData})
                    }}
                  />
                  <TextField
                    id="address"
                    label="Address"
                    multiline
                    variant="standard"
                    value={this.state.formData.address}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.address=e.target.value
                      this.setState({formData})
                    }}
                  />
                  <TextField
                    id="number"
                    label="Mobile_Number"
                    multiline
                    variant="standard"
                    value={this.state.formData.mnumber}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.mnumber=e.target.value
                      this.setState({formData})
                    }}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    multiline
                    variant="standard"
                    value={this.state.formData.password}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.password=e.target.value
                      this.setState({formData})
                    }}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    multiline
                    variant="standard"
                    value={this.state.formData.email}
                    onChange={(e) => {
                      let formData = this.state.formData
                      formData.email=e.target.value
                      this.setState({formData})
                    }}
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
                        <TableCell align="left">Full_Name</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Mobile_Number</TableCell>
                        <TableCell align="left">Password</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          A002
                        </TableCell>
                        <TableCell align="left">vidsuha</TableCell>
                        <TableCell align="left">badulla</TableCell>
                        <TableCell align="left">934323</TableCell>
                        <TableCell align="left">123</TableCell>
                        <TableCell align="left">vsfs@</TableCell>
                        <TableCell align="left">
                          <Button variant="contained" color="error">
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Admin;
