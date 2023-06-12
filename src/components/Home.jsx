import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { categoryMovies } from '../service/api'
import { NOWPLAYING_API_URL } from '../constants/constant'
import Slide from './Slide'
import UpNext from './UpNext'

const Wrapper = styled(Box)({
  display: 'flex',
  padding: '20px 0'
})

const Component = styled(Box)({

  padding: '0 115px'

})
export default function Home() {

  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
      console.log(response.results);
    }
    getData();
  }, [])


  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies}/>
      </Component>

    </>
  )
}