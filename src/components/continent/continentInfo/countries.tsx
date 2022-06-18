import { Box, Text } from '@chakra-ui/react';

interface IProps {
    countries: number | string;
}

export function Countries({ countries }: IProps) {
    return (
        <Box textAlign={['left', 'center']}>
            <Text
                color="highlight.500"
                fontWeight="semibold"
                fontSize={['2xl', '6xl']}
            >
                {countries}
            </Text>{' '}
            países
        </Box>
    );
}
