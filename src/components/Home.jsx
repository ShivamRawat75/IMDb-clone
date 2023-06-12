import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { useEffect,useState } from 'react'
import { Box } from '@mui/material'
import { categoryMovies } from '../service/api'
import { NOWPLAYING_API_URL } from '../constants/constant'
export default function Home() {

  const [movies,setMovies]=useState();

  useEffect(()=>{
    const getData=async()=>{
      let  response= await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
      console.log(response.results);
    }
    getData();
  },[])


  return (
    <>
      <Header />
      <Box>
        <Banner movies={movies}/>
      </Box>
    </>
  )
}
