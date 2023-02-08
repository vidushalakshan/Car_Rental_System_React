import React from "react";
import "../styles/admin/car.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DataTable from 'react-data-table-component';




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

    
      </Box>
    )
};

export default Cars;