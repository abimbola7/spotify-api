"use client"
import React from 'react'
import { IoIosPlay, IoIosPause } from "react-icons/io";

const Audioo = ({ audio }) => {
  const [status, setStatus] = React.useState("paused");
  const [isHovered, setIsHovered] = React.useState(false);
  const [spotifyControl, setSpotifyControl] = React.useState(null);

  const controls = () => {
    if (spotifyControl.paused) {
      spotifyControl.play();
      setStatus("playing");
    } else {
      spotifyControl.pause();
      setStatus("paused");
    }
  }

  React.useEffect(() => {
    const audioId = document.getElementById('spotify');
    setSpotifyControl(audioId);

    if (audioId) {
      const handlePlay = () => setStatus("playing");
      const handlePause = () => setStatus("paused");
      const handleEnded = () => setStatus("paused");

      audioId.addEventListener('play', handlePlay);
      audioId.addEventListener('pause', handlePause);
      audioId.addEventListener('ended', handleEnded);

      return () => {
        audioId.removeEventListener('play', handlePlay);
        audioId.removeEventListener('pause', handlePause);
        audioId.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div 
      onClick={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='absolute p-2 rounded-full bg-[#1DB954] flex items-center justify-center right-6 z-[1000] top-8 cursor-pointer'>
        {isHovered && (
          <div className='absolute p-1 mb-2 text-sm text-white transition bg-gray-800 rounded bottom-full'>
            preview
          </div>
        )}
      {
        status === "paused" ? <IoIosPlay size={24}/> : <IoIosPause size={24}/>
      }
      <audio id='spotify'>
        <source src={audio} type="audio/mp3"></source>
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

export default Audioo;
