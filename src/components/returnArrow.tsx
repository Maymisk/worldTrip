import { Icon, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

interface IProps {
    path: string;
}

export function ReturnArrow({ path }: IProps) {
    return (
        <ChakraLink as={Link} href={path}>
            <Icon
                position="absolute"
                top={['0.8rem', '2rem']}
                left="1rem"
                cursor="pointer"
                display="block"
                as={RiArrowLeftSLine}
                fontSize={['1.5rem', '2rem']}
                color="black"
            />
        </ChakraLink>
    );
}
