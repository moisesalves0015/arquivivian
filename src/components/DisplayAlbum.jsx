import React from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';


const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext)
    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Podcast</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.fulldesc}</h4>
                    <p className='mt-1'>
                        <b> Produzido por: </b>
                        {albumData.produzido}
                    </p>

                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Titulo</p>
                <p className='hidden sm:block'>Tema</p>
                <p className='hidden sm:block'>Descrição</p>
                <img className='m-auto w-4 hidden sm:block' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData
                    .filter(song => song.album === Number(id)) // filtra apenas as músicas do álbum atual
                    .map((item, index) => (
                        <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                            <p className='text-white flex'>
                                <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                                <img className=' w-10 h-10 mr-5' src={item.image} alt="" />
                                {item.name}
                            </p>
                            <p className='text-[15px] hidden sm:block'>{item.tema}</p>
                            <p className='text-[15px] hidden sm:block'>{item.desc}</p>
                            <p className='text-[15px] text-center hidden sm:block'>{item.duration}</p>
                        </div>
                    ))
            }

        </>
    )
}

export default DisplayAlbum