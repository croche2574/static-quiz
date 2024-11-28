import React, { memo } from "react"
import { useColorMode, useColorModeValue } from "../ui/color-mode"
import { Box, Button, Flex, Stack, Separator } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
export const Header = memo((props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const headerColor = useColorModeValue('gray.100', 'gray.900')
    const separatorColor = useColorModeValue('black', 'white')


    return (
        <Box w={'100%'} bg={headerColor} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Logo</Box>
                <Stack direction={'row'} alignItems={"center"}>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        train yourself
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor}/>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        tips
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor}/>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        why care?
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor}/>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        about
                    </Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    </Button>
                </Stack>

            </Flex>

        </Box>
    )
})