import React from "react";
import "../src/styles/background.css";
import "../src/styles/normalize.css"
import { Route, Routes } from "react-router-dom";
import RoutersTwo from "./routers/RoutersTwo";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import HotOffers from "./components/pages/HotOffers";
import Contact from "./components/common/contact/Contact";

function App() {
  return (
   <Routes>
      <Route exact path="/" element= {<RoutersTwo/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/hot_offers" element={<HotOffers/>} />
      <Route path="/contact" element={<Contact/>} />
   </Routes>
  )
}


export default App;
