import React, { Fragment } from "react";
import Routers from "../../routers/Routers";
import Contact from "../common/contact/Contact";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Contact/>
        </Fragment>
    )
};

export default Layout;