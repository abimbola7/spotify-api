"use client"
import Image from 'next/image'
import React from 'react'
import Card from './ui/card'
import "./nowplaying.css"
import Header from './header'



export default function LastPlayed({ currentPlaying, lastPlayed, playlist }) {
  const src =  currentPlaying?.item?.album?.images[0]?.url || lastPlayed.items[0].track.album.images[0].url; 
  const getLastPlayed = () => {
    console.log(lastPlayed.items[0].played_at)
    const artists = lastPlayed.items[0].track.artists
    const name = lastPlayed.items[0].track.name; 

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
  const getCurrentPlayed = () => {
    const artists = currentPlaying.item.artists
    const src = currentPlaying.item.album.images[0].url; 
    const name = currentPlaying.item.name;
    // const playlistSrc = playlist?.images[0]?.url
    // const playlistName = playlist?.name
    // console.log(playlist.images[0].url)
    return (
    <Card>
      <Image
      src={src}
      alt={"album cover"}
      height={500}
      width={500}
      className="rounded-lg duration-200 transition-transform hover:scale-105"
      />
      <div className='text-center mt-4'>
        <ul className=''>
          {
            artists.map(artist=>(
              <li key={artist.name}>{artist.name}</li>
            ))
          }
        </ul>
        <h1 className='uppercase text-2xl font-medium'>{ name }</h1>
      </div>
      {/* <div className='flex justify-center items-center flex-col space-y-3 absolute bottom-0'>
        <Image 
        src={playlistSrc}
        alt="playlist"
        width={50}
        height={50}
        className="rounded-full"
        />
        <p>{playlistName}</p>
      </div> */}
    </Card>
    )
  }

  return (
    <div 
    style={{
      backgroundImage : `url(${src || "black"})`,
    }}
    className={`w-full bg-cover bg-no-repeat min-h-screen`}>
      <div className='w-full bg-cover bg-no-repeat backdrop-blur-lg min-h-screen flex flex-col'>
        <Header
          currentPlaying={currentPlaying}
          lastPlayed={lastPlayed}
        />
        <div
        className='flex items-center justify-center flex-1'
        >
          {
            typeof currentPlaying === "object" ? (
              getCurrentPlayed()
            ) : ( 
              getLastPlayed()
            )
          }
        </div>
        <Header
          currentPlaying={currentPlaying}
          lastPlayed={lastPlayed}
        />
      </div>
    </div>
  )
  // if (typeof currentPlaying === "object") {
  //   return (
  //     getCurrentPlayed()
  //   )
  // } else {
  //   return (
  //     getLastPlayed()
  //   )
  // }
}
