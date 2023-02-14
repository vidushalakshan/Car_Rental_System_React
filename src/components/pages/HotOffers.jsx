import React from "react";
import "../../styles/hotOffers.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import PaymentDetails from "./PaymentDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HotOffers = () => {

    const history=useHistory();
    const navigateTo = () => history.push("/payment");

  return (
    <div title="Cars">
      <div>
        <h3 className="smTitle">Come with</h3>
        <h1 className="bigTitle">Hot Offers</h1>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://www.zastavki.com/pictures/originals/2020Auto___Toyota_2020_black_Toyota_Crown_RS_Limited_car_on_a_white_background_142988_.jpg"
                  ></img>
                </div>

                <div>
                  <h4 className="section_title">Toyota Aventador </h4>

                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                   
                      
                      <Button 
                       variant="contained" className="btn1"
                      onClick={navigateTo}>
                        Rent
                      </Button>
                      
                   
          
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                    
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://pixelz.cc/wp-content/uploads/2019/03/bmw-m5-hamann-mission-wqhd-1440p-wallpaper.jpg"
                  ></img>
                </div>

                <div>
                  <h4 className="section_title">Toyota Aventador</h4>
                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                    <Button variant="contained" className="btn1" onClick={navigateTo}>
                      Rent
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://momentcar.com/images/toyota-crown-14.jpg"
                  ></img>
                </div>
                <div>
                  <h4 className="section_title">Toyota Aventador</h4>
                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                    <Button variant="contained" className="btn1" onClick={navigateTo}>
                      Rent
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://cdn.jarviscars.com.au//img/news/toyota/toyota-prado.jpg"
                  ></img>
                </div>

                <div>
                  <h4 className="section_title">Toyota Aventador</h4>
                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                    <Button variant="contained" className="btn1" onClick={navigateTo}>
                      Rent
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://us.123rf.com/450wm/whitecity/whitecity2107/whitecity210700522/whitecity210700522.jpg?ver=6"
                  ></img>
                </div>

                <div>
                  <h4 className="section_title">Toyota Aventador</h4>
                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                    <Button variant="contained" className="btn1" onClick={navigateTo}>
                      Rent
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="car_item">
                <div>
                  <img
                    className="car_img"
                    src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11000623/JTDKAMFU4N3188731/dffef90d727480b574f62001f5d79f85.jpg"
                  ></img>
                </div>
                <div>
                  <h4 className="section_title">Toyota Aventador</h4>
                  <h6 className="priceDate">
                    $40.00<span>/ Day</span>
                  </h6>
                </div>

                <div>
                  <span className="model">
                    A/C, Power Steering/CD Player,Manual
                  </span>
                </div>
                <Stack direction="row">
                  <div className="stack">
                    <Button variant="contained" className="btn1" onClick={navigateTo}>
                      Rent
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="btn1"
                      onClick={navigateTo}
                    >
                      Details
                    </Button>
                  </div>
                </Stack>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HotOffers;
