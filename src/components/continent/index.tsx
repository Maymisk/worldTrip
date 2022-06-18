import { Box, Flex, SimpleGrid, Text, Stack } from '@chakra-ui/react';
import { Banner } from './banner';
import { Cities } from './cities';
import { ContinentInfo } from './continentInfo';

interface IProps {
    continent: string;
    continentBannerPath: string;
    continentDescription: string;
    languages: number | string;
    countries: number | string;
    cities_100: number | string;

    cities: {
        name: string;
        country: string;
        cityBannerPath: string;
        countryFlagPath: string;
    }[];
}

export function Continent({
    continent,
    continentBannerPath,
    continentDescription,
    languages,
    countries,
    cities_100,
    cities
}: IProps) {
    return (
        <Box height="100vh">
            <Banner title={continent} imagePath={continentBannerPath} />

            <Box px={['1rem', '4rem', '8.75rem']} mt={['1.5rem', '5rem']}>
                <SimpleGrid
                    minChildWidth={[250, 400]}
                    alignItems="center"
                    spacing={[4, 8]}
                >
                    <Text
                        textAlign="justify"
                        color="gray.500"
                        fontSize={['sm', '2xl']}
                    >
                        {continentDescription}
                    </Text>

                    <ContinentInfo
                        languages={languages}
                        countries={countries}
                        cities_100={cities_100}
                    />
                </SimpleGrid>

                <Flex mt={['2rem', '5rem']} direction="column">
                    <Text color="gray.500" fontSize="4xl">
                        Cidades +100
                    </Text>

                    <Cities cities={cities} />
                </Flex>
            </Box>
        </Box>
    );
}
