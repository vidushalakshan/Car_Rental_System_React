import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "../../src/styles/dashBoard.css"

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
                    <Grid item xs={4}>
                        <Item>
                            <div>
                                <h2>Admin Dashboard</h2>
                                <hr></hr>
                                <div>
                                    <ul className="dash_btn">
                                        <li>
                                            <Button>Dashboard</Button>
                                        </li>
                                        <li>
                                            <Button>Admin</Button>
                                        </li>
                                        <li>
                                            <Button>Drivers</Button>
                                        </li>
                                        <li>
                                            <Button>Customers</Button>
                                        </li>
                                        <li>
                                            <Button>Cars</Button>
                                        </li>
                                        <li>
                                            <Button>Booking</Button>
                                        </li>
                                        <li>
                                            <Button>Payment</Button>
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