import React from "react"
import "../../../styles/contact.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";


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

const Contact  = () => {

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

          <Col lg="3" md="4" sm="12">
            <div className="mb-4 contact_details">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="office__info">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Name" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
              <div className="newsletter email">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

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
}

export default Contact;