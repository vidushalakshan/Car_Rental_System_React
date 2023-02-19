import React from "react";
import "../src/styles/background.css";
import "../src/styles/normalize.css";
import { Route, Routes } from "react-router-dom";
import RoutersTwo from "./routers/RoutersTwo";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import HotOffers from "./components/pages/HotOffers";
import Contact from "./components/common/contact/Contact";
import LogingForm from "./components/pages/LogingForm";
import DashBoard from "./admin_pages/DashBoard";
import PaymentDetails from "./components/pages/PaymentDetails";
import Admin from "./admin_pages/Admin";
import Driver from "./admin_pages/Driver";
import Customer from "./admin_pages/Customer";
import Cars from "./admin_pages/Cars";
import Booking from "./admin_pages/Booking";


function App() {
  return (
   <Routes>
      {/* <Route exact path="/" element= {<RoutersTwo/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/hot_offers" element={<HotOffers/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/loging" element={<LogingForm/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/payment" element={<PaymentDetails/>} /> */}
       <Route path="/" element={<Booking/>} />
   </Routes>
  )
}

export default App;
