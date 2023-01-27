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
import FlutterDashRoundedIcon from '@mui/icons-material/FlutterDashRounded';

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
                                <FlutterDashRoundedIcon className="dashIcon"></FlutterDashRoundedIcon>
                                <h2 className="admin_dashboard">Admin Dashboard</h2>
                                <hr></hr>
                                <div className="page_link">
                                    <ul className="dash_btn">
                                        <li className="page">
                                            <h3 className="dashboard"><DashboardIcon className="icon_dash page_icon"></DashboardIcon>Dashboard</h3>
                                        </li>
                                        <li className="page">
                                            <h3  className="admin"><AdminPanelSettingsIcon className="admin_dash page_icon"></AdminPanelSettingsIcon>Admin</h3>
                                        </li>
                                        <li className="page">
                                            <h3 className="driver"><AirlineSeatReclineExtraIcon className="driver_dash page_icon"></AirlineSeatReclineExtraIcon>Drivers</h3>
                                        </li>
                                        <li className="page">
                                            <h3 className="customer"><AccountCircleIcon className="customer_dash page_icon"></AccountCircleIcon>Customers</h3>
                                        </li>
                                        <li className="page">
                                            <h3 className="car"><CarRentalIcon className="car_dash page_icon"></CarRentalIcon>Cars</h3>
                                        </li>
                                        <li className="page">
                                            <h3 className="booking"><LibraryBooksIcon className="booking_dash page_icon"></LibraryBooksIcon>Booking</h3>
                                        </li>
                                        <li className="page">
                                            <h3 className="payment"><PaymentsIcon className="payment_dash page_icon"></PaymentsIcon>Payment</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <div>hwllow vihanga</div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>    
            
    )
}

export default DashBoard;