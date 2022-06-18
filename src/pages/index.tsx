import { Box, Divider, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { Banner } from '../components/home/banner';
import { Slider } from '../components/home/Slider';
import { TravelTypes } from '../components/home/TravelType/travelTypes';

export default function Home() {
    return (
        <Box height="100vh">
            <Banner />

            <Flex bg="white" direction="column">
                <Box p={8}>
                    <TravelTypes />
                </Box>

                <Divider
                    width="90px"
                    alignSelf="center"
                    justifySelf="center"
                    borderColor="black"
                    border="2px"
                />

                <Box>
                    <Text
                        color="gray.500"
                        fontSize={['36px']}
                        textAlign="center"
                        mt={10}
                    >
                        Vamos nessa? <br />
                        Então escolha seu continente
                    </Text>
                </Box>

                <Box w="100%" my="3.25rem" mx="auto" maxWidth={1240}>
                    <Slider />
                </Box>
            </Flex>
        </Box>
    );
}
