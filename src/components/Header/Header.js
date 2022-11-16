import React from "react"

function Header (){
    return (
    <nav className="NavbarItems">
        <h1>Car Rental<i className=""></i></h1>
        <nav>
            <li><a href="home">Home</a></li>
            <li><a href="home">About</a></li>
            <li><a href="home">Cars</a></li>
            <li><a href="home">Users</a></li>
            <li><a href="home">Contact</a></li>
        </nav>
    </nav>
    )
}

export default Header;