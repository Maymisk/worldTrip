import { Continent } from '../../components/continent';
import { sampleCities } from '../../utils/sampleCities';

export default function Europe() {
    return (
        <Continent
            continent="Europa"
            continentBannerPath="/images/continents/europe/europe.png"
            continentDescription="A Europa é, por convenção, um dos seis continentes do
            mundo. Compreendendo a península ocidental da Eurásia, a
            Europa geralmente divide-se da Ásia a leste pela
            divisória de águas dos montes Urais, o rio Ural, o mar
            Cáspio, o Cáucaso, e o mar Negro a sudeste"
            countries={50}
            languages={60}
            cities_100={27}
            cities={sampleCities.europe}
        />
    );
}
