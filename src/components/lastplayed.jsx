"use client"
import Image from 'next/image'
import React from 'react'
import Card from './ui/card'

export default function LastPlayed({ currentPlaying, lastPlayed }) {
  console.log(lastPlayed.items[0].played_at)
  const artists = lastPlayed.items[0].track.artists
  const src = lastPlayed.items[0].track.album.images[0].url; 
  const name = lastPlayed.items[0].track.name; 
  // const name = lastPlayed.items[0].track.album.images
  return (
    <Card>
      <Image
      src={src}
      alt={"album cover"}
      height={500}
      width={500}
      className="rounded-lg"
      />
      <div className='text-center mt-4'>
        <ul className=''>
          {
            artists.map(artist=>(
              <li key={artist.name}>{artist.name}</li>
            ))
          }
        </ul>
        <h1 className='uppercase text-xl font-medium'>{ name }</h1>
      </div>
    </Card>
  )
}
