import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";
import "../src/styles/normalize.css";
import "../src/styles/background.css";
import AboutUs from "./components/pages/AboutUs";
import HotOffers from "./components/pages/HotOffers";
import Contact from "./components/common/contact/Contact";
import DashBoard from "./admin_pages/DashBoard";


function App() {

  const isBackgroundRed = true;
  
  return (
    <div>
      <DashBoard/>
    </div>
  );
}

export default App;
