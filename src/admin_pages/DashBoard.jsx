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
                    <Grid item xs={2.5}>
                        <Item>
                            <div className="dash_page">
                                <h2>Admin Dashboard</h2>
                                <hr></hr>
                                <div className="page_link">
                                    <ul className="dash_btn">
                                        <li className="page">
                                            <Button className="dashboard"><DashboardIcon className="page_icon"></DashboardIcon>Dashboard</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="admin"><AdminPanelSettingsIcon className="page_icon"></AdminPanelSettingsIcon>Admin</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="driver"><AirlineSeatReclineExtraIcon className="page_icon"></AirlineSeatReclineExtraIcon>Drivers</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="customer"><AccountCircleIcon className="page_icon"></AccountCircleIcon>Customers</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="car"><CarRentalIcon className="page_icon"></CarRentalIcon>Cars</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="booking"><LibraryBooksIcon className="page_icon"></LibraryBooksIcon>Booking</Button>
                                        </li>
                                        <li className="page">
                                            <Button className="payment"><PaymentsIcon className="page_icon"></PaymentsIcon>Payment</Button>
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