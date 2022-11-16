import React from "react"
import { MenuData } from "./MenuData";

function Header (){
    return (
    <nav className="NavbarItems">
        <h1>Car Rental<i className=""></i></h1>
        <ul>
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