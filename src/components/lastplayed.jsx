"use client"
import Image from 'next/image'
import React from 'react'
import Card from './ui/card'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'
import Loader from './ui/loader'



export default function LastPlayed({ currentPlaying, lastPlayed, playlist, profile }) {
  const currentSrc =  currentPlaying?.item?.album?.images[0]?.url; 
  const getLastPlayed = () => {
    const artists = lastPlayed.items[0].track.artists
    const name = lastPlayed.items[0].track.name; 
    const src = lastPlayed.items[0].track.album.images[0].url;
    const url = lastPlayed.items[0].track.external_urls.spotify
    return (
      <Card>
        <Link href={url} target="_blank">
          <Image
          src={src}
          alt={"album cover"}
          height={500}
          width={500}
          className="rounded-lg duration-200 transition-transform hover:scale-105"
          />
        </Link>
        <div className='text-center mt-4'>
          <div className='my-2'>
            {
              artists?.map((artist, i)=>(
                <div key={artist.name}>
                  <span>
                  {artist.name}
                  {artists.length - 1 === i ? 
                  "" : 
                  <span>
                  {","} &nbsp;
                  </span> 
                  }
                  </span>
                </div>
              ))
            }
          </div>
          <h1 className='uppercase text-xl font-medium'>{ name }</h1>
        </div>
      </Card>
    )
  }
  const getCurrentPlayed = () => {
    const artists = currentPlaying.item.artists
    const src = currentPlaying.item.album.images[0].url; 
    const name = currentPlaying.item.name;
    const url = currentPlaying.item.external_urls.spotify
    return (
    <Card>
      <Link href={url} target="_blank">
        <Image
        src={src}
        alt={"album cover"}
        height={500}
        width={500}
        className="rounded-lg duration-200 transition-transform hover:scale-105"
        />
      </Link>
      <Loader />
      <div className='text-center mt-4'>
        <div className='my-2'>
        {
          artists?.map((artist, i)=>(
            <div key={artist.name}>
              <span>
              {artist.name}
              {artists.length - 1 === i ? 
              "" : 
              <span>
              {","} &nbsp;
              </span> 
              }
              </span>
            </div>
          ))
        }
        </div>
        <h1 className='uppercase text-2xl font-medium'>{ name }</h1>
      </div>
    </Card>
    )
  }
  React.useEffect(()=>{
    document.title = currentPlaying ? `Abimbola is listening to ${currentPlaying.item.name}` : `Abimbola last listened to ${lastPlayed.items[0].track.name}`
  },[])
  
  return (
    <div 
    style={{
      backgroundImage : `url(${currentSrc || "#121212"})`,
    }}
    className={`w-full bg-cover bg-no-repeat min-h-screen bg-center`}>
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
        <Footer
          currentPlaying={currentPlaying}
          lastPlayed={lastPlayed}
          playlbum={playlist}
          profile={profile}
        />
      </div>
    </div>
  )
}
