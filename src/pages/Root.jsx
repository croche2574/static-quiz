import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router";
import { Header } from "../components/root/Header";
import { Footer } from "../components/root/Footer";
import { PageBackground } from "../components/root/PageBackground";
import { ClientOnly } from "@chakra-ui/react";

export const Root = memo(() => {
    return (
        <ClientOnly>
            <Header />
            <div id="content">
                <PageBackground>
                    <Outlet />
                </PageBackground>
            </div>
            <Footer />
        </ClientOnly>
    )
})