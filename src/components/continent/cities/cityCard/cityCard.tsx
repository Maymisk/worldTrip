import { Box, Flex, Image, Text, Stack } from '@chakra-ui/react';
import { CardDescription } from './cardDescription';

interface IProps {
    country: string;
    city: string;
    cityBannerPath: string;
    countryFlagPath: string;
}

export function CityCard({
    city,
    country,
    cityBannerPath,
    countryFlagPath
}: IProps) {
    return (
        <Flex w={256} h={279} direction="column">
            <Image
                w="100%"
                h={173}
                src={cityBannerPath}
                borderTopRadius={'base'}
                borderX="1px"
                borderTop="1px"
                borderColor="gray.500"
            />

            <CardDescription
                city={city}
                country={country}
                cityBannerPath={cityBannerPath}
                countryFlagPath={countryFlagPath}
            />
        </Flex>
    );
}
