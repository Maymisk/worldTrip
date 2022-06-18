import {
    Box,
    HStack,
    Text,
    Tooltip,
    useBreakpointValue
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface IProps {
    cities_100: number | string;
}

export function CitiesPlusHundred({ cities_100 }: IProps) {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box textAlign={['left', 'center']}>
            <Text
                color="highlight.500"
                fontWeight="semibold"
                fontSize={['2xl', '6xl']}
            >
                {cities_100}
            </Text>{' '}
            <HStack spacing="5px" align="center">
                <Text>cidades +100</Text>

                {isWideScreen && (
                    <Tooltip
                        hasArrow
                        label="Cidades do continente entre as 100 mais visitadas do mundo"
                        aria-label="Cidades do continente entre as 100 mais visitadas do mundo"
                    >
                        <span>
                            <FiInfo />
                        </span>
                    </Tooltip>
                )}
            </HStack>
        </Box>
    );
}
