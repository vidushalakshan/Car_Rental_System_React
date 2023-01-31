import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../src/styles/dashBoard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaymentsIcon from "@mui/icons-material/Payments";
import FlutterDashRoundedIcon from "@mui/icons-material/FlutterDashRounded";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import "../data/script";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2.5}>
          <Item>
            <div className="dash_page">
              <FlutterDashRoundedIcon className="dashIcon"></FlutterDashRoundedIcon>
              <h2 className="admin_dashboard">Admin Dashboard</h2>
              <hr></hr>
              <div className="page_link">
                <ul className="dash_btn">
                  <li className="page">
                    <h3 className="dashboard" id="dashLink">
                      <DashboardIcon className="icon_dash page_icon"></DashboardIcon>
                      Dashboard
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="admin" id="adminLink">
                      <AdminPanelSettingsIcon className="admin_dash page_icon"></AdminPanelSettingsIcon>
                      Admin
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="driver">
                      <AirlineSeatReclineExtraIcon className="driver_dash page_icon"></AirlineSeatReclineExtraIcon>
                      Drivers
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="customer">
                      <AccountCircleIcon className="customer_dash page_icon"></AccountCircleIcon>
                      Customers
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="car">
                      <CarRentalIcon className="car_dash page_icon"></CarRentalIcon>
                      Cars
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="booking">
                      <LibraryBooksIcon className="booking_dash page_icon"></LibraryBooksIcon>
                      Booking
                    </h3>
                  </li>
                  <li className="page">
                    <h3 className="payment">
                      <PaymentsIcon className="payment_dash page_icon"></PaymentsIcon>
                      Payment
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </Item>
        </Grid>

        <Grid item xs={9}>
          <Item>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    ADMIN
                  </Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge badgeContent={4} color="error">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
              {renderMobileMenu}
              {renderMenu}
            </Box>

            <Grid item xs={12} className="grid">
              <Item className="card" id="dash">
                <div className="admin_card card_admin">
                  <div className="admin_logo">
                    <AdminPanelSettingsIcon className="admin_icon"></AdminPanelSettingsIcon>
                  </div>
                  <hr className="hr"></hr>
                  <div className="title_box">
                    <h3>Admin</h3>
                    <span>23</span>
                  </div>
                  <span className="text_driver">+55% than lask week</span>
                </div>

                <div className="admin_card card_driver">
                  <div className="driver_logo">
                    <AirlineSeatReclineExtraIcon className="driver_icon"></AirlineSeatReclineExtraIcon>
                  </div>
                  <hr className="hr"></hr>
                  <div className="driver_box">
                    <h3>Drivers</h3>
                    <span>23</span>
                  </div>
                  <span className="text_driver">+55% than lask week</span>
                </div>

                <div className="admin_card card_cars">
                  <div className="car_logo">
                    <CarRentalIcon className="car_icon"></CarRentalIcon>
                  </div>
                  <hr className="hr"></hr>
                  <div className="driver_box">
                    <h3>Cars</h3>
                    <span>30</span>
                  </div>
                  <span className="text_driver">+55% than lask week</span>
                </div>

                <div className="admin_card card_customer">
                  <div className="car_logo">
                    <AccountCircleIcon className="customer_icon"></AccountCircleIcon>
                  </div>
                  <hr className="hr"></hr>
                  <div className="driver_box">
                    <h3>Customers</h3>
                    <span>53</span>
                  </div>
                  <span className="text_driver">+55% than lask week</span>
                </div>

                <div className="admin_card card_booking">
                  <div className="booking_logo">
                    <LibraryBooksIcon className="booking_icon"></LibraryBooksIcon>
                  </div>
                  <hr className="hr"></hr>
                  <div className="booking_details">
                      <h3>Booking</h3>
                      <span>53</span>
                  </div>
                  <span className="text_booking">+55% than lask week</span>
                </div>

                <div className="admin_card card_payment">
                  <div className="payment_logo">
                      
                  </div>
                  <h3>Payment</h3>
                </div>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
