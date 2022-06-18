import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { gradientOverlay } from '../../../styles/gradientOverlay';
import Link from 'next/link';

interface IProps {
    imagePath: string;
    title: string;
    description: string;
    href: string;
}

export function Slide({ imagePath, title, description, href }: IProps) {
    return (
        <Flex
            position="relative"
            zIndex={-2}
            width="100%"
            height={['250px', '450px']}
            align="center"
            justify="center"
            backgroundImage={imagePath}
            backgroundSize="cover"
            _after={gradientOverlay}
        >
            <Link href={href}>
                <Stack spacing={3} align="center" cursor="pointer">
                    <Text fontSize={[24, 48]} fontWeight="bold">
                        {title}
                    </Text>
                    <Text fontSize={[14, 24]} fontWeight="bold">
                        {description}
                    </Text>
                </Stack>
            </Link>
        </Flex>
    );
}
