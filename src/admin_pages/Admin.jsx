import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/admin/admin.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const Admin = () => {
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
          label="Admin_ID"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Full_Name"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Address"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Mobile_Number"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Password"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Email"
          multiline
          variant="standard"
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

      {/* Start table content */}

     
    </Box>
  );
};

export default Admin;
