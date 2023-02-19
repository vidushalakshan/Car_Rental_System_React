import Home from "../components/pages/Home";
import HotOffers from "../components/pages/HotOffers";
import AboutUs from "../components/pages/AboutUs";
import React from "react";
import Header from "../components/Header/Header";
import Contact from "../components/common/contact/Contact";


const RoutersTwo = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <AboutUs/>
            <HotOffers/>
            <Contact/>
        </div>
    )
};

export default RoutersTwo;