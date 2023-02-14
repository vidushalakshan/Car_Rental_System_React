import React, { Fragment } from "react";
import Routers from "../../routers/Routers";
import Contact from "../common/contact/Contact";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <Fragment>
            <div>
                <Routers/>
            </div>
        </Fragment>
    )
};

export default Layout;