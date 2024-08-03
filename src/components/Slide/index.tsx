import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { SlideProps } from './@types';

export function Slide({ children, ...props }: SlideProps) {
    return(
        <Swiper {...props}>
                {
                    children.map((item, i) => {
                        return ( <SwiperSlide key={i}>{ item }</SwiperSlide> )
                    })
                }
        </Swiper>
    )
}