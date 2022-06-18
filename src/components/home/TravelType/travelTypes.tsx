import {
    HStack,
    UnorderedList,
    ListItem,
    useBreakpointValue,
    SimpleGrid,
    Box,
    Flex
} from '@chakra-ui/react';
import { TravelTypeCard } from './travelTypeCard';
import { TravelTypeListItem } from './travelTypeListItem';

export function TravelTypes() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    if (isWideScreen) {
        return (
            <HStack align="center" justify="space-evenly" my="5.625rem">
                <TravelTypeCard
                    imagePath="/images/travel/cocktail.svg"
                    title="vida noturna"
                />
                <TravelTypeCard
                    imagePath="/images/travel/surf.svg"
                    title="praia"
                />
                <TravelTypeCard
                    imagePath="/images/travel/building.svg"
                    title="moderno"
                />
                <TravelTypeCard
                    imagePath="/images/travel/museum.svg"
                    title="clássico"
                />
                <TravelTypeCard
                    imagePath="/images/travel/earth.svg"
                    title="e mais..."
                />
            </HStack>
        );
    }

    return (
        <Flex
            display="flex"
            align="center"
            justify="center"
            flexWrap="wrap"
            gap={8}
        >
            <TravelTypeListItem>vida noturna</TravelTypeListItem>
            <TravelTypeListItem>praia</TravelTypeListItem>
            <TravelTypeListItem>moderno</TravelTypeListItem>
            <TravelTypeListItem>clássico</TravelTypeListItem>
            <TravelTypeListItem>e mais...</TravelTypeListItem>
        </Flex>
    );
}
