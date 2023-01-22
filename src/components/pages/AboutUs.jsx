import React from "react";
import Grid from '@mui/material/Grid';
import "../../styles/aboutUs.css";
import { Box } from "@mui/system";
import Font, { Text } from 'react-font'


const AboutUs  = () => {
    
    return (
        
        <div>
            <Font family='Viga'>
            <h1 className="topic">About Us</h1>
            </Font>
            <section>
                <Font family='Viga'>
                <h2 className="welcome_service">Welcome to car rent service</h2>
                </Font>
            </section>
            <section className="about_desc">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                        <item className="desc">
                        With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged mechanical servicing and valet servicing onsite. 
                        </item>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </div>
    );
}

export default AboutUs;