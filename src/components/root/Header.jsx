import React, { memo } from "react"
import { useColorMode, useColorModeValue } from "../ui/color-mode"
import { Box, Flex } from "@chakra-ui/react"

export const Header = memo((props) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Logo</Box>
            </Flex>

        </Box>
    )
}, [])