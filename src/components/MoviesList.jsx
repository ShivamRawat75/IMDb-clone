import { Box } from '@mui/material'
import React from 'react'
import { List, ListItem, Typography } from '@mui/material'

export default function MoviesList({ movies }) {
    return (
        <>
            {
                movies.map(movie => (
                    <List>
                        <ListItem>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        </ListItem>

                        <ListItem>
                            <Typography>
                                {movie.original_title}
                            </Typography>
                        </ListItem>
                    </List>
                ))
            }
        </>
    )
}
