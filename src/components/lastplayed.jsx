"use client"
import Image from 'next/image'
import React from 'react'
import Card from './ui/card'
import "./nowplaying.css"

export default function LastPlayed({ currentPlaying, lastPlayed, playlist }) {
  const getLastPlayed = () => {
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
  const getCurrentPlayed = () => {
    const artists = currentPlaying.item.artists
    const src = currentPlaying.item.album.images[0].url; 
    const name = currentPlaying.item.name;
    const playlistSrc = playlist.images[0].url
    const playlistName = playlist.name
    console.log(playlist.images[0].url)
    return (
      <>
      <div 
      style={{
        position : "absolute",
        top : "0",
        z : -1000,
        backgroundImage : `url(${src})`,
        backgroundBlendMode : "darken",
      }}
      className={`w-full bg-cover bg-no-repeat min-h-screen flex items-center justify-center`}>
      </div>
      <div className='w-full bg-cover bg-no-repeat min-h-screen flex items-center justify-center backdrop-blur-lg'>
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
          <div className='flex justify-center items-center flex-col space-y-3 absolute bottom-0'>
            <Image 
            src={playlistSrc}
            alt="playlist"
            width={50}
            height={50}
            className="rounded-full"
            />
            <p>{playlistName}</p>
          </div>
        </Card>
      </div>
      </>
    )
  }

  if (typeof currentPlaying === "object") {
    return (
      getCurrentPlayed()
    )
  }
  // return (
  //   <>
  //     {
  //       typeof currentPlaying === "object" && (
  //         getCurrentPlayed()
  //       ) 
  //     }
  //   </>
  //   // <Card>

  //   // </Card>
  // )
}
