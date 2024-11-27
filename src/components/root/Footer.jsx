import { Box, Button, chakra, Container, Stack, Text, useBreakpointValue, VisuallyHidden } from "@chakra-ui/react"
import React, { memo } from "react"
import { useColorModeValue } from "../ui/color-mode"
import { FaYoutube, FaDiscord, FaTwitter } from "react-icons/fa"

const SocialButton = memo(({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
})

export const Footer = memo((props) => {
    const variant = useBreakpointValue(
        {
          base: 'outline',
          md: 'solid',
        },
        {
          // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
          // (Defaults to 'base')
          fallback: 'md',
        },
      )
    console.log(variant)
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>Enter copyright here.</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Discord'} href={'#'}>
                        <FaDiscord />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Youtube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
})