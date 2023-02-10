import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "../../styles/payment.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PaymentDetails = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Item className="customer_content">
              <TextField
                id="standard-textarea"
                label="Full_Name"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Email"
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
                label="Address"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Email"
                multiline
                variant="standard"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PaymentDetails;
