import { Box, Text } from '@chakra-ui/react';

interface IProps {
    languages: number | string;
}

export function Languages({ languages }: IProps) {
    return (
        <Box textAlign={['left', 'center']}>
            <Text
                color="highlight.500"
                fontWeight="semibold"
                fontSize={['2xl', '6xl']}
            >
                {languages}
            </Text>
            línguas
        </Box>
    );
}
