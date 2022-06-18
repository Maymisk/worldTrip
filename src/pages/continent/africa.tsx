import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Continent } from '../../components/continent';
import { Banner } from '../../components/continent/banner';
import { Cities } from '../../components/continent/cities';
import { CityCard } from '../../components/continent/cities/cityCard/cityCard';
import { ContinentInfo } from '../../components/continent/continentInfo';
import { sampleCities } from '../../utils/sampleCities';

export default function Africa() {
    return (
        <Continent
            continent="África"
            continentBannerPath="/images/continents/africa/africa.jpg"
            continentDescription="A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes."
            countries={54}
            languages={'2000+'}
            cities_100={3}
            cities={sampleCities.africa}
        />
    );
}
