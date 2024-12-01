import { Box, Button, Separator, Flex, Stack, Center } from "@chakra-ui/react"
import React, { memo } from "react"
import { useColorModeValue } from "../ui/color-mode"

export const Footer = memo((props) => {
    const boxBG = useColorModeValue('gray.50', 'gray.900')
    const boxColor = useColorModeValue('gray.700', 'gray.200')
    const separatorColor = useColorModeValue('black', 'white')
    return (
        <Box
            bg={boxBG}
            color={boxColor}
            w={'100%'}
            px={4}
            position={"fixed"}
            bottom={0}>
            <Center>
                <Stack direction={'row'} alignItems={"center"}>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        github
                    </Button>
                    <Separator size={'md'} orientation="vertical" height="5" borderColor={separatorColor} />
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        ko-fi
                    </Button>
                </Stack>
            </Center>
        </Box>
    )
})