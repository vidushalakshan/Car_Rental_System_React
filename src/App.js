import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";

import "../src/styles/normalize.css"
import "../src/styles/background.css"
import AboutUs from "./components/pages/AboutUs";
import HotOffers from "./components/pages/HotOffers";



function App() {
  return (
    <div>
      <Header />
      <Home/>
      <AboutUs/>
      <HotOffers/>
    </div>
  );
}

export default App;
