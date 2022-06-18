import { Flex } from '@chakra-ui/react';
import { CitiesPlusHundred } from './citiesPlusHundred';
import { Countries } from './countries';
import { Languages } from './languages';

interface IProps {
    countries: string | number;
    languages: string | number;
    cities_100: string | number;
}

export function ContinentInfo({ countries, languages, cities_100 }: IProps) {
    return (
        <Flex
            fontSize={['1.125rem', '2xl']}
            color="gray.500"
            justify="space-evenly"
        >
            <Countries countries={countries} />
            <Languages languages={languages} />
            <CitiesPlusHundred cities_100={cities_100} />
        </Flex>
    );
}
