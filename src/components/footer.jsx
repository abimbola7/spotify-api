"use client"

import React from 'react'
import moment from 'moment'

export default function Footer({ currentPlaying, lastPlayed }) {
  const [ time, setTime ] = React.useState(moment(lastPlayed.items[0].played_at ).fromNow())
  console.log(lastPlayed.items  )
  React.useEffect(()=>{
    const getDate = () => {
      const date  = moment(lastPlayed.items[0].played_at ).fromNow()
      setTime(date)
      // console.log(date)
    }
    const interval = setInterval(getDate,10000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='grid grid-rows-2 sm:grid-rows-none sm:grid-cols-3 text-white mb-2 items-center px-3 justify-items-center'>
      <div className='col-span-1 sm:col-span-2 text-left sm:text-center text-sm'>
        <p>Songs I&apos;m listening to on Spotify</p>
      </div>
      <div className='text-center'>
        <span>Last seen 👀</span> <br/>
        <span className='bg-[#1DB954] py-1 px-2 text-xs ml-3 rounded-md'>{time}</span>
      </div>
    </div>
  )
}
