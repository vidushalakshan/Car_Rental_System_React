import React from "react"
import { MenuData } from "./MenuData";
import "../../styles/NavBar.css"

function Header (){
    return (
    <nav className="NavbarItems">
        <h1 className="logo">Car Rental  <i className="fa-solid fa-car"></i><i className=""></i></h1>
        <ul className="nav-menu">
        {MenuData.map((item,index)=>{
            return (  
                <li key={index}><a href={item.url} className={item.cName}>
                 <i className={item.icon}></i>{item.title}</a></li>
            )
        })}
        </ul>
    </nav>
    )
}

export default Header;