import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";

import "../src/styles/normalize.css"
import AboutUs from "./components/pages/AboutUs";



function App() {
  return (
    <div>
      <Header />
      <Home/>
      <AboutUs/>
    </div>
  );
}

export default App;
