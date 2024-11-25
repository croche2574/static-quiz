import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router";
import { Header } from "../components/root/Header";
import { Footer } from "../components/root/Footer";

export const Root = memo(() => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}, [])