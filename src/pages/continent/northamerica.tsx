import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Continent } from '../../components/continent';
import { Banner } from '../../components/continent/banner';
import { Cities } from '../../components/continent/cities';
import { CityCard } from '../../components/continent/cities/cityCard/cityCard';
import { ContinentInfo } from '../../components/continent/continentInfo';
import { sampleCities } from '../../utils/sampleCities';

export default function NorthAmerica() {
    return (
        <Continent
            continent="América do Norte"
            continentBannerPath="/images/continents/northAmerica/northAmerica.jpg"
            continentDescription="A América do Norte é um subcontinente que compreende a porção setentrional do continente americano."
            countries={3}
            languages={3}
            cities_100={13}
            cities={sampleCities.northAmerica}
        />
    );
}
