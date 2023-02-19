import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import "../styles/dashBoard.css";
import Paper from "@mui/material/Paper";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FlutterDashRoundedIcon from "@mui/icons-material/FlutterDashRounded";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SlideNavBar = () => {
  return (
    <Grid item xs={2.5} className="dash_fixed">
      {/* start slide nav bar */}
      <Item>
        <div className="dash_page">
          <FlutterDashRoundedIcon className="dashIcon"></FlutterDashRoundedIcon>
          <h2 className="admin_dashboard">Admin Dashboard</h2>
          <hr></hr>
          <div className="page_link">
            <ul className="dash_btn">
              <li className="page" id="dashLink">
                <h3 className="dashboard">
                  <NavLink
                    href="#"
                    id="link"
                    className="navbar-item"
                    activeClassName="is-active"
                    to="/dashboard"
                  >
                    <DashboardIcon className="icon_dash page_icon"></DashboardIcon>
                    Dashboard
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="adminLink">
                <h3 className="admin">
                  <NavLink
                    href="#"
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/admin"
                  >
                    <AdminPanelSettingsIcon className="admin_dash page_icon"></AdminPanelSettingsIcon>
                    Admin
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="driverLink">
                <h3 className="driver">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/driver"
                    href="#"
                  >
                    <AirlineSeatReclineExtraIcon className="driver_dash page_icon"></AirlineSeatReclineExtraIcon>
                    Drivers
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="customerLink">
                <h3 className="customer">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/customers"
                    href="#"
                  >
                    <AccountCircleIcon className="customer_dash page_icon"></AccountCircleIcon>
                    Customers
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="carLink">
                <h3 className="car">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/cars"
                    href="#"
                  >
                    <CarRentalIcon className="car_dash page_icon"></CarRentalIcon>
                    Cars
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="bookingLink">
                <h3 className="booking">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/booking"
                    href="#"
                  >
                    <LibraryBooksIcon className="booking_dash page_icon"></LibraryBooksIcon>
                    Booking
                  </NavLink>
                </h3>
              </li>
              <li className="page" id="paymentLink">
                <h3 className="payment">
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    id="link"
                    to="/admin_payment"
                    href="#"
                  >
                    <PaymentsIcon className="payment_dash page_icon"></PaymentsIcon>
                    Payment
                  </NavLink>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </Item>
    </Grid>
  );
};

export default SlideNavBar;
