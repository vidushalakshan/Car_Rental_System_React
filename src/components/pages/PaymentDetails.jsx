import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "../../styles/payment.css";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import Contact from "../common/contact/Contact";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PaymentDetails = () => {
  const [valu, onChang] = useState("10:00");
  const [value, onChange] = useState(new Date());

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
            <div>
              <img
                className="car_img"
                src="https://www.zastavki.com/pictures/originals/2020Auto___Toyota_2020_black_Toyota_Crown_RS_Limited_car_on_a_white_background_142988_.jpg"
              ></img>
            </div>
            <Item className="customer_content">
                <h2>Booking Information</h2>
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
              <div className="time">
                <TimePicker onChang={onChange} valu={value} className="date" />
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
          <Item className="payment_info">
          <h2>Payment Information</h2>
          <TextField
                id="standard-textarea"
                label="Card_Number"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Name On Card"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="CVV"
                multiline
                variant="standard"
              />
               <div>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="date"
                />
              </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
            <item>
                <Contact/>
            </item>
        </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PaymentDetails;
