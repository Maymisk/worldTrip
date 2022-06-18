import { Image, Stack, Text } from '@chakra-ui/react';

interface IProps {
    imagePath: string;
    title: string;
}

export function TravelTypeCard({ imagePath, title }: IProps) {
    return (
        <Stack spacing={6} justify="center" align="center">
            <Image src={imagePath} width="85px" height="85px" />

            <Text fontWeight="bold" fontSize="1.5rem" color="gray.500">
                {title}
            </Text>
        </Stack>
    );
}
