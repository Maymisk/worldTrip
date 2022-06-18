import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Continent } from '../../components/continent';
import { Banner } from '../../components/continent/banner';
import { Cities } from '../../components/continent/cities';
import { CityCard } from '../../components/continent/cities/cityCard/cityCard';
import { ContinentInfo } from '../../components/continent/continentInfo';
import { sampleCities } from '../../utils/sampleCities';

export default function Australia() {
    return (
        <Continent
            continent="Oceania"
            continentBannerPath="/images/continents/australia/australia.jpg"
            continentDescription="Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville."
            countries={14}
            languages={820}
            cities_100={3}
            cities={sampleCities.australia}
        />
    );
}
