import React, { memo } from "react"
import { useColorMode, useColorModeValue } from "../ui/color-mode"
import { Box, Button, Flex, Icon, Stack, Separator } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { Switch } from "../ui/switch"
import { ReactIcon } from "../ui/icon"

const ModeSwitch = memo((props) => {

    return (
        <Switch
            onChange={(e) => {props.toggle()}}
            colorPalette="blue"
            size="lg"
            trackLabel={{
                on: (
                    <ReactIcon icon={FaSun} color="yellow.400" />
                ),
                off: (
                    <ReactIcon icon={FaMoon} color="gray.400" />
                ),
            }}
        />
    )
})
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
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor} />
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        tips
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor} />
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        why care?
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor} />
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        about
                    </Button>
                    <ModeSwitch toggle={toggleColorMode} />
                </Stack>

            </Flex>

        </Box>
    )
})