"use client"
import React from 'react'
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { Toast } from "radix-ui";

const Audioo = ({ audio }) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
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
		return () => clearTimeout(timerRef.current);
	}, []);

  React.useEffect(() => {
    console.log(audio)
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
  }, [audio]);


  React.useEffect(() => {
    if (spotifyControl) {
      spotifyControl.load();
    }
  }, [audio, spotifyControl]);

  return (
    <Toast.Provider swipeDirection="right">
			<button
				className="absolute p-2 rounded-full bg-[#1DB954] flex items-center justify-center right-6 z-[1000] top-8 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
				onClick={() => {
          if (audio === null) {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              // eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          } else {
            controls()
          }
				}}
			>
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
			</button>
			<Toast.Root
				className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
				open={open}
				onOpenChange={setOpen}
			>
				<Toast.Title className=" !text-black !w-fit !p-2">
					Audio Preview not available 😢
				</Toast.Title>
			</Toast.Root>
			<Toast.Viewport className="fixed top-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
		</Toast.Provider>
  )
}

export default Audioo;
