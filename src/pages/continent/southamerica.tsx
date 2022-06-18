import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Continent } from '../../components/continent';
import { Banner } from '../../components/continent/banner';
import { Cities } from '../../components/continent/cities';
import { CityCard } from '../../components/continent/cities/cityCard/cityCard';
import { ContinentInfo } from '../../components/continent/continentInfo';
import { sampleCities } from '../../utils/sampleCities';

export default function SouthAmerica() {
    return (
        <Continent
            continent="América do Sul"
            continentBannerPath="/images/continents/southAmerica/southAmerica.jpg"
            continentDescription="A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial."
            countries={12}
            languages={7}
            cities_100={3}
            cities={sampleCities.southAmerica}
        />
    );
}
