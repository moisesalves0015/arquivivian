import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext)

  return (
    <div className="fixed bottom-0 left-0 w-full h-[10%] bg-black flex justify-between items-center text-white px-4 z-50">
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-20 rounded' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.podcast}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className=' lg:hidden'>
          <p className='text-center font-medium'>{track.podcast}</p>
          <p className='inline-block animate-marquee text-lg whitespace-nowrap' > {track.name}</p>

        </div>
        <div className='flex gap-4'>

          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />

          {playStatus
            ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          }



          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />

        </div>
        <div className='flex items-center gap-5' >
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{track.duration}</p>
        </div>
      </div>
    </div>
  )
}

export default Player