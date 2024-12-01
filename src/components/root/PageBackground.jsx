import { Box, Container, Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import { useColorModeValue } from "../ui/color-mode";


export const PageBackground = memo(({ children }) => {
    const bgColor = useColorModeValue('gray.200', 'gray.800')
    return (
        <Container minHeight={'90vh'} minWidth={'100%'} centerContent overflow={"hidden"} mt={0} bg={bgColor}>
            {children}
        </Container>
    )
})