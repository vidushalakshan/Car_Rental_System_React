import React from "react";
import Grid from '@mui/material/Grid';
import "../../styles/aboutUs.css";
import Box from '@mui/material/Box';
import Font, { Text } from 'react-font';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AboutUs  = () => {
    
    return (
        
        <div title="About">
            <Font family='Viga'>
            <h1 className="topic">About Us</h1>
            </Font>
            <section>
                <Font family='Viga'>
                <h2 className="welcome_service">Welcome to car rent service</h2>
                </Font>
            </section>
            <section>
                <Box sx={{ width: '100%' }} className="about_desc">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={1}>
                            <item className="desc"> 
                                
                            </item>
                        </Grid>
                        <Grid item xs={4}>
                            <item className="desc"> 
                            With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged mechanical servicing and valet servicing onsite.
                            </item>
                        </Grid>
                        <Grid item xs={1}>
                            <item className="desc"> 
                                
                            </item>
                        </Grid>
                        <Grid item xs={2}>
                            <item className="desc"> 
                                <img className="about_image" src="https://4kwallpapers.com/images/wallpapers/honda-civic-type-r-2022-white-cars-white-background-5k-5120x2880-8430.jpeg"></img>
                            </item>
                        </Grid>
                    </Grid>
                </Box>
               
            </section>
        </div>
    );
}

export default AboutUs;