import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../src/styles/dashBoard.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PaymentsIcon from "@mui/icons-material/Payments";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import * as React from "react";
import "../data/script";
import Admin from "./Admin";
import Driver from "./Driver";
import Cars from "./Cars";
import Customer from "./Customer";
import Payment from "./Payment";
import Booking from "./Booking";
import SlideNavBar from "./SlideNavBar";
import TopNavBar from "./TopNavBar";



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
    <div title="dashboard">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
         <SlideNavBar/>

          {/* end slide nav bar */}

          {/* start top nav bar */}

          <Grid item xs={9}>
            <Item>

              <TopNavBar/>

              {/* end top nav bar */}

              {/* start dashboard content */}

              <Grid item xs={12} className="grid" id="dash">
                <Item className="card">
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
                      <PaymentsIcon className="customer_icon"></PaymentsIcon>
                    </div>
                    <hr className="hr"></hr>
                    <div className="driver_box">
                      <h3>Payment</h3>
                      <span>53</span>
                    </div>
                    <span className="text_driver">+55% than lask week</span>
                  </div>
                </Item>
              </Grid>

              {/* end dashboard content */}
            </Item>
          </Grid>

          {/* admin content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="admin">
                  <Admin />
                </div>
              </Item>
            </Grid>
          </Grid> */}

          {/* driver content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="driver">
                  <Driver />
                </div>
              </Item>
            </Grid>
          </Grid> */}

          {/* Cars content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="cars">
                  <Cars />
                </div>
              </Item>
            </Grid>
          </Grid> */}

          {/* Customer content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="customer">
                  <Customer />
                </div>
              </Item>
            </Grid>
          </Grid> */}

          {/* Payment content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="payment">
                  <Payment />
                </div>
              </Item>
            </Grid>
          </Grid> */}

          {/* booking content */}

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div id="booking">
                  <Booking />
                </div>
              </Item>
            </Grid>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
};

export default DashBoard;
