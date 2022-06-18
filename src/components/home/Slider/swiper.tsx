import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Slide } from './slide';
import { Box } from '@chakra-ui/react';

export function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}"></span>`;
                }
            }}
            autoplay={{
                delay: 5000
            }}
        >
            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/europe/europe.png"
                    title="Europa"
                    description="O continente mais antigo"
                    href="/continent/europe"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/africa/africa.avif"
                    title="África"
                    description="A origem da humanidade"
                    href="/continent/africa"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/australia/australia.avif"
                    title="Oceania"
                    description="O lar do exótico"
                    href="/continent/australia"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/australia/australia.avif"
                    title="Ásia"
                    description="O maior de todos"
                    href="/continent/asia"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/northAmerica/northAmerica.avif"
                    title="América do Norte"
                    description="O epítome do Ocidente"
                    href="/continent/northamerica"
                />
            </SwiperSlide>

            <SwiperSlide>
                <Slide
                    imagePath="/images/continents/southAmerica/southAmerica.avif"
                    title="América do Sul"
                    description="O paraiso tropical"
                    href="/continent/southamerica"
                />
            </SwiperSlide>

            <Box className="swiper-pagination" />
        </Swiper>
    );
}
