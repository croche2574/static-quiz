import { Box, Container, Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import { useColorModeValue } from "../ui/color-mode";


export const PageBackground = memo(({ children }) => {
    const bgColor = useColorModeValue('gray.200', 'gray.800')
    const boxColor = useColorModeValue('blue', 'red')
    return (
        <Container maxW={"full"} centerContent overflow={"hidden"} mt={0} bg={bgColor}>
            <Flex>
                <Box
                    bg={boxColor}
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                        {children}
                </Box>
            </Flex>
        </Container>
    )
})