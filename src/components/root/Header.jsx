import React, { memo } from "react"
import { useColorMode, useColorModeValue } from "../ui/color-mode"
import { Box, Button, Flex } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
export const Header = memo((props) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Logo</Box>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                </Button>
            </Flex>

        </Box>
    )
}, [])