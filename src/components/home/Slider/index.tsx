import { Box, Flex } from '@chakra-ui/react';
import { Carousel } from './swiper';

export function Slider() {
    return (
        <Box mx={['0', 'auto']} w={['100%']}>
            <Carousel />
        </Box>
    );
}
