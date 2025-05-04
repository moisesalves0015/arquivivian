import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name, image, desc,id}) => {

const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[140px] max-w-[310px] p-2 px-3 rounded cursor-pointer hover:bg[#ffffff26 md:items-center'>
        <img className="rounded max-w-[300px] " src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm  overflow-hidden text-ellipsis whitespace-normal max-h-[3em] leading-snug'>{desc}</p>
        </div>
  )
}

export default SongItem