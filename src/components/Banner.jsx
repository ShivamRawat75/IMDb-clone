import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const StyledBanner = styled('img')({
    width: '100%'
})

export default function Banner({ movies }) {


    return (
        <Box width={'65%'}>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                slidesToSlide={1}
            >
                {

                    movies.map(movie => (
                        <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='' />
                    ))
                }

            </Carousel>
        </Box>
    )
}
