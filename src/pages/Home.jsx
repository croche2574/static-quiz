import { Box, Heading, VStack, Text, Button, Center, Link, HStack } from "@chakra-ui/react";
import React, { memo } from "react";
import { useColorModeValue } from "../components/ui/color-mode";

const IntroCard = memo(({route}) => {
    const cardColor = useColorModeValue('gray.100', 'gray.900')
    return (
        <Box bg={cardColor} w={'full'}>
            <Center>
                <VStack>
                    <HStack>
                        
                    </HStack>
                    <Button>Train Yourself</Button>
                    <Link>why care?</Link>
                </VStack>
            </Center>
        </Box>
    )
})


export const Home = memo(() => {

    return (
        <VStack minWidth={'100%'}>
            <Heading size={"4xl"}>train <span style={{ textDecoration: "underline", textUnderlineOffset: "9px",  }}>your</span>  neural network</Heading>
            <Text size={"xs"}>(your brain)</Text>
            <Heading size={"lg"}>to identify AI-Generated media.</Heading>
            <IntroCard />
        </VStack>
    )
}, [])