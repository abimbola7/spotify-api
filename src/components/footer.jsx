"use client"

import React from 'react'
import moment from 'moment';
import Link from 'next/link';

export default function Footer({ currentPlaying, lastPlayed, playlbum, profile}) {
  const userLink = profile.external_urls.spotify
  // const image = playlbum?.images[0]?.url || ""
  // const image = playlbum
  // console.log(image);
  const [ time, setTime ] = React.useState(moment(lastPlayed.items[0].played_at ).fromNow())
  React.useEffect(()=>{
    const getDate = () => {
      const date  = moment(lastPlayed.items[0].played_at ).fromNow()
      setTime(date)
    }
    const interval = setInterval(getDate,10000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`flex flex-col sm:flex-row text-[#e6e6e6] mb-2 items-center px-1 sm:px-3 ${playlbum !== 'error' ? 'justify-around' : 'justify-center'} mx-auto w-full mt-3`}>
      <div className='text-left sm:text-center text-sm sm:w-[32%]'>
        <p>Songs I&apos;m listening to on 
        <Link href={userLink} target="_blank" className='text-[#1DB954] duration-200 transition-colors text-[#1DB954] hover:text-[#1DB954]'> Spotify</Link>
        </p>
      </div>
      {
        currentPlaying && playlbum !== "error" && (
          <div className='flex space-x-2 truncate w-fit'>
            <div className='flex flex-wrap items-center justify-center gap-3 mx-auto overflow-hidden w-fit'>
              <span>Playing from </span>
              <Link 
              href={playlbum?.external_urls?.spotify} 
              target="_blank" 
              className='text-[#1DB954] duration-200 transition-colors hover:text-[#1DB954] flex items-center justify-center gap-2'>
                <img 
                src={playlbum?.images[0]?.url}
                className='object-cover object-center w-8 h-8 rounded' 
                alt={playlbum?.name}/>
                <span>
                  {playlbum?.name}
                </span>
              </Link>
            </div>
          </div>    
        )
      }
      {
        !currentPlaying && (
          <div className='text-center sm:w-[32%]'>
            <span>Last seen 👀</span> <br/>
            <span className='bg-[#1DB954] py-1 px-2 text-xs ml-3 rounded-md'>{time}</span>
          </div>
        )
      }
    </div>
  )
}
