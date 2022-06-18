import { Flex, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiArrowLeftLine } from 'react-icons/ri';
import { ReturnArrow } from './returnArrow';

export function Header() {
    const { asPath } = useRouter();

    const isNotAtHomePage = asPath != '/';

    return (
        <Flex
            position="relative"
            align="center"
            justify="center"
            pb="0.5"
            pl="0.5"
            height={['50px', '100px']}
            bg="white"
        >
            {isNotAtHomePage && <ReturnArrow path="/" />}
            <Image src="/images/Logo.svg" width={['5rem', '8rem', '11.5rem']} />
        </Flex>
    );
}
