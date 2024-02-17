"use client"
import Image from 'next/image'
import React from 'react'
import Card from './ui/card'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'
import Loader from './ui/loader'
import { useRouter } from 'next/navigation'



const LastPlayed = ({ currentPlaying, lastPlayed, playlist, profile }) => {
  const router = useRouter()
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
          className="transition-transform duration-200 rounded-lg hover:scale-105"
          />
        </Link>
        <div className='mt-4 text-center'>
          <div className='my-2'>
            {
              artists?.map((artist, i)=>(
                <>
                  <span>
                  {artist.name}
                  {artists.length - 1 === i ? 
                  "" : 
                  <span>
                  {","} &nbsp;
                  </span> 
                  }
                  </span>
                </>
              ))
            }
          </div>
          <h1 className='text-xl font-medium uppercase'>{ name }</h1>
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
      <Link href={url} target="_blank" className='mb-1'>
        <Image
        src={src}
        alt={"album cover"}
        height={500}
        width={500}
        className="transition-transform duration-200 rounded-lg hover:scale-105"
        />
      </Link>
      <Loader />
      <div className='mt-2 text-center'>
        <div className='my-2'>
        {
          artists?.map((artist, i)=>(
            <div key={i}>
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
        <h1 className='text-2xl font-medium uppercase'>{ name }</h1>
      </div>
    </Card>
    )
  }
  
  React.useEffect(()=> {
    setInterval(() => {
      router.refresh();
      document.title = currentPlaying ? `Abimbola is listening to ${currentPlaying.item.name}` : `Abimbola last listened to ${lastPlayed.items[0].track.name}`
    }, 100000)
  },[])

  return (
    <div 
    style={{
      backgroundImage : `linear-gradient(to top, rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.5)), url(${currentSrc || "#121212"})`,
      backgroundBlendMode : "darken"
      
    }}
    className={`w-full bg-cover bg-no-repeat min-h-screen bg-center`}>
      <div className='flex flex-col w-full min-h-screen bg-no-repeat bg-cover backdrop-blur-lg'>
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

export default LastPlayed;