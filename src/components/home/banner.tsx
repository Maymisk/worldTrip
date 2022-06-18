import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';

export function Banner() {
    const isWideScreen = useBreakpointValue({
        base: false,
        xl: true
    });

    return (
        <Flex
            position="relative"
            bgImage="/images/Background.svg"
            bgSize="cover"
            align="center"
            justify="flex-start"
            px={['4', '8.75rem']}
            py={['8', '4.375rem']}
        >
            <Box>
                <Text fontWeight="500" fontSize={['20px', '36px']}>
                    5 continentes, <br /> infinitas possibilidades.
                </Text>
                <Text mt="5" fontSize={['14px', '20px']}>
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou
                </Text>
            </Box>

            {isWideScreen && (
                <Image
                    src="/images/Airplane.svg"
                    position="absolute"
                    right={'8.75rem'}
                    bottom={'-2.5rem'}
                />
            )}
        </Flex>
    );
}
