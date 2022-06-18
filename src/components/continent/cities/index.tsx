import { SimpleGrid } from '@chakra-ui/react';
import { CityCard } from './cityCard/cityCard';

interface IProps {
    cities: {
        name: string;
        country: string;
        cityBannerPath: string;
        countryFlagPath: string;
    }[];
}

export function Cities({ cities }: IProps) {
    return (
        <SimpleGrid
            mt={[5, 10]}
            minChildWidth={256}
            spacing={['2.825rem']}
            alignSelf={['center', 'auto']}
        >
            {cities.map(city => {
                return (
                    <CityCard
                        key={city.name}
                        city={city.name}
                        country={city.country}
                        cityBannerPath={city.cityBannerPath}
                        countryFlagPath={city.countryFlagPath}
                    />
                );
            })}
        </SimpleGrid>
    );
}
