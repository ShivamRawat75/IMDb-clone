import { Box, styled } from '@mui/material'
import React from 'react'
import { List, ListItem, Typography } from '@mui/material'
import {Star} from '@mui/icons-material'

const Banner=styled('img')({
    width:'47px'
})

const Container=styled(List)`
    display:flex;
`

export default function MoviesList({ movies }) {
    return (
        <>
            {
                movies.map(movie => (
                    <Container>
                        <ListItem>
                            <Banner src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        </ListItem>

                        <ListItem>
                            <Typography>
                                {movie.original_title}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Star color='warning'/>
                            <Typography>{movie.vote_average}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                {movie.release_date}
                            </Typography>
                        </ListItem>
                        
                    </Container>
                ))
            }
        </>
    )
}
