import React from "react";
import "../../styles/NavBar.css";
import { MenuData } from "./MenuData";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";



function Header() {
  const history = useNavigate();
  // const navigateTo= () => history.push("loging");

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
              <Link to={item.path} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="login_btn">
        <Stack direction="row" spacing={2}>
          <Link to="/loging">
            <Button variant="contained" color="success">
              Loging
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}

export default Header;
