import React from "react";
import "../../styles/hotOffers.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HotOffers  = () => {
    return(
        <div>
            <div>
                <h3 className="smTitle">Come with</h3>
                <h1 className="bigTitle">Hot Offers</h1>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Item>
                            <div className="car_item">
                                <div >
                                    <img className="car_img" src="https://s1.1zoom.me/big0/660/Shelby_Super_Cars_White_background_White_559662_1280x853.jpg"></img>
                                </div>

                                <div>
                                    <h4 className="section_title">Toyota Aventador</h4>
                                    <h6 className="priceDate">$40.00<span>/ Day</span></h6>
                                </div>

                                <div>
                                     <span className="model">
                                     A/C, Power Steering/CD Player,Manual
                                    </span>
                                </div>
                               
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <div className="car_item">
                                <div >
                                    <img className="car_img" src="https://s1.1zoom.me/big0/660/Shelby_Super_Cars_White_background_White_559662_1280x853.jpg"></img>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <div className="car_item">
                                <div >
                                    <img className="car_img" src="https://s1.1zoom.me/big0/660/Shelby_Super_Cars_White_background_White_559662_1280x853.jpg"></img>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default HotOffers;