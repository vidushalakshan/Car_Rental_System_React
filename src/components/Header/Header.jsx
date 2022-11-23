import React from "react"
import "../../styles/NavBar.css";
import { MenuData } from "./MenuData";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: "5px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Header() {
    // state = {clicked:false}
    return (
        <nav className="NavbarItems">
            <h1 className="logo">Car Rental  <i className="fa-solid fa-car"></i><i className=""></i></h1>
            {/* <div className="menu-icon">
                <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div> */}
            <ul className="nav-menu">
                {MenuData.map((item, index) => {
                    return (
                        <li key={index}><a href={item.url} className={item.cName}>
                            <i className={item.icon}></i>{item.title}</a></li>
                    )
                })}
            </ul>

            <div className="searchBar">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>
        </nav>
    )
}

export default Header;