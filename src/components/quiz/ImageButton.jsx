import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { memo } from "react";
import { useColorModeValue } from "../ui/color-mode";

export const ImageButton = memo(({ enabled, src, link, bg, caption }) => {
    const buttonSize = '300px'
    return (
        <VStack>
            <Button height={buttonSize} width={buttonSize} p={0} bg={bg}>
                <Image rounded={'md'} src={src} />
            </Button>
            <Text>{caption}</Text>
        </VStack>
    )
})