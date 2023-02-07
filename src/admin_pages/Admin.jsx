import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/admin/admin.css";

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
    </Box>
  );
};

export default Admin;
