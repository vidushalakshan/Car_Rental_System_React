import React from "react";
import { Navbar } from "reactstrap";
import Header from "../Header/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../styles/loging.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LogingForm = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
        
      >
        <Grid container spacing={12}>
        <Grid item xs={3.5}>
         
         </Grid>
        <Grid item xs={5}>
            <Item>
          {/* Start textField content */}

          <div className="txtAdmin">
            <TextField
              id="standard-textarea"
              label="Customer_ID"
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
              label="Nic_No"
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
              label="Email"
              multiline
              variant="standard"
            />
          </div>

          {/* End textField content */}

          {/* Start button content */}

          <div className="btnAdmin">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" component="label" color="success">
                Your_Image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
              <Button variant="contained" color="secondary">
                Clear
              </Button>
            </Stack>
          </div>
          </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LogingForm;
