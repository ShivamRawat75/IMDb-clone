import React from 'react'
import Header from './Header'
import { useEffect,useState } from 'react'
import { categoryMovies } from '../service/api'
import { NOWPLAYING_API_URL } from '../constants/constant'
export default function Home() {

  const [movies,setMovies]=useState();

  useEffect(()=>{
    const getData=async()=>{
      let  response= await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.result);
    }
    getData();
  },[])


  return (
    <div>
      <Header />
    </div>
  )
}
