import React, { memo } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/root/Header";
import { Footer } from "../components/root/Footer";
import { PageBackground } from "../components/root/PageBackground";
import { Flex } from "@chakra-ui/react";

export const Root = memo(() => {
    return (
        <Flex direction={"column"}>
            <Header />
            <PageBackground>
                <Outlet />
            </PageBackground>
            <Footer />
        </Flex>
    )
})