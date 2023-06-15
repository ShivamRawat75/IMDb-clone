
import { Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { moviesType } from '../constants/constant';
import {Divider} from '@mui/material';

import MoviesList from '../components/MoviesList';

import Header from '../components/Header'
import { Box } from '@mui/material'
import { categoryMovies } from '../service/api';

import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from '../constants/constant';

import { useLocation } from 'react-router-dom';

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

const StyledBanner = styled('img')`

    width:100%;
    height: 450px;
`
const Title = styled(Typography)(`
        
        color:#ffffff;

`)

const Component=styled(Box)`

    width :80%;
    margin :auto;
`

const Container=styled(Box)`

    background:#f5f5f5;
    padding :10px;
`

export default function CategoryMovies() {

    const { search } = useLocation();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await categoryMovies(API_URL);
            setMovies(response.results);
        }
            let API_URL;

            if (search.includes('popular')) {
                API_URL=POPULAR_API_URL;
            }
            else if (search.includes('upcoming')) {
                API_URL=UPCOMING_API_URL;
            }
            else if (search.includes('toprated'))
            {
                API_URL=TOPRATED_API_URL;
            }
    
        getData(API_URL);
    }, [search])

    return (
        <>
            <Header />
            <Component>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    slidesToSlide={1}


                >

                    {

                        movies.map(movie => (
                            <>
                                <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='' />
                                <Title>{movie.original_title}</Title>
                            </>

                        ))
                    }

                </Carousel>
                <Container>
                    <Typography variant='h6'>TMDb Charts</Typography>
                    <Typography variant='h4'>IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{fontSize:12, margin:5 }} >IMDb Top {movies.length} as rated by regular IMDb voters.</Typography>
                <Divider/>
                <MoviesList movies={movies}/>
                </Container>
                
            </Component>
        </>
    )
}
