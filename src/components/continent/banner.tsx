import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { gradientOverlay } from '../../styles/gradientOverlay';

interface IProps {
    title: string;
    imagePath: string;
}

export function Banner({ title, imagePath }: IProps) {
    return (
        <Flex
            position="relative"
            height={['150px', '500px']}
            backgroundImage={imagePath}
            backgroundSize="cover"
            align={['center', 'center', 'end']}
            justify={['center', 'center', 'start']}
            pb={[0, 0, '3rem']}
            pl={[0, 0, '8.25rem']}
            zIndex={-2}
            _after={gradientOverlay}
        >
            <Text
                fontWeight="semibold"
                fontSize={['3xl', '6xl']}
                textAlign="center"
            >
                {title}
            </Text>
        </Flex>
    );
}
