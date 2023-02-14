import React from "react";
import "../../../styles/contact.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { display } from "@mui/system";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Contact = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4 contact_head">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">No.123 Badulla</p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: muhib5532@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
            <div className="mb-4 contact_details" id="news">
              <div className="footer__link-title">Newsletter</div>
              <div className="office__info">Subscribe our newsletter</div>
              <div className="newsletter">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                  />
                </Box>
              </div>
            </div>
          </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Vidusha. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
