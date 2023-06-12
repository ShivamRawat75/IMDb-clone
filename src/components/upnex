
import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material'


const Component = styled(Box)(`
     width: 40%;
    display:felx;
    flex-direction:column;
    align-item:baseline;
    padding-left:20px;
     & > p {
        color:#f5c518;
        font-weight:600;
        font-size: 18px;
        margin-bottom: 10px; 
     }
     
     `)
const Poster = styled('img')({
    width: 88
})

const Wrapper=styled(Box)(`

        color:#ffffff;
        display:flex;
        
        & > p{
            margin-left:20px;
        }

`)



export default function UpNext({ movies }) {
    return (
        <Component>
            <Typography>Up Next</Typography>
            {
                //console.log('result ',movies)
                movies.splice(0, 3).map(movie => (
                    <Wrapper>
                        <Poster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        <Typography>{movie.original_title}</Typography>

                    </Wrapper>
                ))
            }
        </Component>
    )
}
