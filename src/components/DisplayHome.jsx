import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import {songsData} from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
  
    <Navbar/ >

   
    <div className='mb-4 '>
        <h1 className='m-5 font-bold text-3xl'>Podcasts</h1>
        <div className='flex  overflow-x-scroll'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      
    </div>
    <div className='mb-4'>
        <h1 className='m-5 font-bold text-3xl'>Todos os Episódios</h1>
        <div className=' flex flex-wrap overflow-auto'>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      
    </div>
    </>
  )
}

export default DisplayHome