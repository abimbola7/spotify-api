"use client"
import Link from 'next/link'
import React from 'react'
import moment from 'moment'

export default function Header({ currentPlaying, lastPlayed, playlist }) {
  // console.log(lastPlayed)
  // React.useEffect(()=>{
  //   const getDate = () => {
  //     const date  = moment(lastPlayed.items[0].played_at ).fromNow()
  //     console.log(date)
  //   }
  //   const interval = setInterval(getDate,10000);
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  return (
    <div className='w-full p-5 font-medium text-white flex items-center justify-between'>
      {/* <Link 
      href="https://www.github.com/abimbola7" 
      target={"_blank"}
      className="duration-200 transition-colors hover:text-[#1DB954]"
      >
        ABIMBOLA <br/>
        OLADOSU
      </Link>
      <div className='p-2 bg-white text-black rounded-lg'>
        {
          currentPlaying?.is_playing ? (
            'ONLINE'
          ) : (
            'OFFLINE'
          )
        }
      </div>
      <div>
        IBADAN, NG
      </div> */}
      <div className='text-red-500 text-5xl backdrop-blur-3xl relative z-[100]'>HEADER</div>
    </div>
  )
}
