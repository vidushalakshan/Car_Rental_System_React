import React from "react";
import "../../styles/NavBar.css";
import { MenuData } from "./MenuData";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const navLinks =[
  {
    path : "/home",
    display:"Home",
  },

  {
    path : "/aboutus",
    display : "About"
  },

  {
    path : "/contact",
    display:"Contacts",
  },

  {
    path : "/cars",
    display : "Cars",
  },

  {
    path : "/dashboard",
    display : "dashboard"
  }

]


function Header() {

      const history = useNavigate();
      const navigateTo= () => history.push("loging");

  // state = {clicked:false}
  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        Car Rental <i className="fa-solid fa-car"></i>
        <i className=""></i>
      </h1>
      {/* <div className="menu-icon">
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div> */}
      <ul className="nav-menu">
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="login_btn">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success"
           onClick={navigateTo}
          >
            Loging
          </Button>
        </Stack>
      </div>
    </nav>
  );
}

export default Header;
