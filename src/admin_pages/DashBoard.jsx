import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../../src/styles/dashBoard.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentsIcon from '@mui/icons-material/Payments';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DashBoard = () => {
    return (
        
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Item>
                            <div className="dash_page">
                                <h2>Admin Dashboard</h2>
                                <hr></hr>
                                <div className="page_link">
                                    <ul className="dash_btn">
                                        <li className="page">
                                            <Button className="icon1"><DashboardIcon></DashboardIcon> Dashboard</Button>
                                        </li>
                                        <li className="page">
                                            <Button><AdminPanelSettingsIcon></AdminPanelSettingsIcon>Admin</Button>
                                        </li>
                                        <li className="page">
                                            <Button><AirlineSeatReclineExtraIcon></AirlineSeatReclineExtraIcon>Drivers</Button>
                                        </li>
                                        <li className="page">
                                            <Button><AccountCircleIcon></AccountCircleIcon>Customers</Button>
                                        </li>
                                        <li className="page">
                                            <Button><CarRentalIcon></CarRentalIcon>Cars</Button>
                                        </li>
                                        <li className="page">
                                            <Button><LibraryBooksIcon></LibraryBooksIcon>Booking</Button>
                                        </li>
                                        <li className="page">
                                            <Button><PaymentsIcon></PaymentsIcon>Payment</Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>    
            
    )
}

export default DashBoard;