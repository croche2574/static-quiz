import { Box, Heading, VStack, Text, Button, Center, Link, HStack, Image } from "@chakra-ui/react";
import React, { memo } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { ImageButton } from "../components/quiz/ImageButton";

const IntroCard = memo(({ route }) => {
    const cardColor = useColorModeValue('gray.100', 'gray.900')
    return (
        <Box bg={cardColor} py={25} px={100}>
            <Center>
                <VStack gap={10}>
                    <HStack gap={10}>
                        <ImageButton src="https://bit.ly/dan-abramov" bg={cardColor} caption={"generated"} />
                        <ImageButton src="https://bit.ly/dan-abramov" bg={cardColor} caption={"human"} />
                    </HStack>
                    <VStack>
                        <Button colorPalette={"blue"}>train yourself</Button>
                        <Link>why care?</Link>
                    </VStack>
                </VStack>
            </Center>
        </Box>
    )
})

const HeaderText = memo(() => {
    return (
        <VStack gap={.5}>
            <br />
            <Heading size={"4xl"}>train <span style={{ textDecoration: "underline", textUnderlineOffset: "9px", }}>your</span>  neural network</Heading>
            <Text size={"xs"}>(your brain)</Text>
            <Heading size={"lg"}>to identify AI-Generated media.</Heading>
        </VStack>
    )
})


export const Home = memo(() => {

    return (
        <VStack gap={7}>
            <HeaderText />
            <IntroCard />
        </VStack>
    )
}, [])