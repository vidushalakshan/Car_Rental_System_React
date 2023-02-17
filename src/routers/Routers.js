import React from "react";
import Home from "../components/pages/Home";
import HotOffers from "../components/pages/HotOffers";
import AboutUs from "../components/pages/AboutUs";
import { Redirect, Route, Switch } from "react-router-dom";
import RoutersTwo from "./RoutersTwo";
import PaymentDetails from "../components/pages/PaymentDetails";
import Layout from "../components/Layout/Layout";
import LogingForm from "../components/pages/LogingForm";
import DashBoard from "../admin_pages/DashBoard";

const Routers = () => {
  return (
    <div>
      <Route path="/">
        <Redirect to="/content"/>
      </Route>
      <Route path="/content">
        <RoutersTwo />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/hotoffers">
        <HotOffers />
      </Route>
      <Route path="/payment">
        <PaymentDetails />
      </Route>
      <Route path="/loging">
        <LogingForm/>
      </Route>
      <Route path="/dashboard">
        <DashBoard/>
      </Route>
    </div>
  );
};

export default Routers;
