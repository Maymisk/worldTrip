import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Continent } from '../../components/continent';
import { Banner } from '../../components/continent/banner';
import { Cities } from '../../components/continent/cities';
import { CityCard } from '../../components/continent/cities/cityCard/cityCard';
import { sampleCities } from '../../utils/sampleCities';

import { ContinentInfo } from '../../components/continent/continentInfo';

export default function Asia() {
    return (
        <Continent
            continent="Ásia"
            continentBannerPath="/images/continents/asia/asia.jpg"
            continentDescription="A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial"
            countries={50}
            languages={'2000+'}
            cities_100={31}
            cities={sampleCities.asia}
        />
    );
}
