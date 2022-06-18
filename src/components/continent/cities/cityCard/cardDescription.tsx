import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

interface IProps {
    country: string;
    city: string;
    cityBannerPath: string;
    countryFlagPath: string;
}

export function CardDescription({
    city,
    country,
    cityBannerPath,
    countryFlagPath
}: IProps) {
    return (
        <Box
            flex="1"
            borderX="1px"
            borderBottom="1px"
            borderBottomRadius="base"
            borderColor="highlight.500"
            py={['1.125rem']}
            px={[6]}
        >
            <Flex justify="space-between" align="center" my="auto">
                <Stack spacing={3}>
                    <Text color="gray.500" fontSize={'xl'}>
                        {city}
                    </Text>
                    <Text color="info.500">{country}</Text>
                </Stack>
                <Image
                    src={countryFlagPath}
                    borderRadius="full"
                    w={30}
                    h={30}
                />
            </Flex>
        </Box>
    );
}
