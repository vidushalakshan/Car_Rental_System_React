import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "./home.css"

const Home = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
    return (
      <div title="Home">
        <Slider {...settings} className="hero__slider homeContent">
          <div className="slider__item slider__item-01 mt0">
           <Container>
             <div className="content">
                <h4 className="text1 mb-3">For Rent $70 Per Day</h4>
                <h1 className="text2 mb-4">Reserve Now and Get 50% Off</h1>
             </div>

              <Stack direction="row" spacing={4}>
                <Button className="button" variant="contained" >
                  Reserve Now
                </Button>
              </Stack>
           </Container>
          </div>
      </Slider>  
      </div>
    );

};

export default Home ;