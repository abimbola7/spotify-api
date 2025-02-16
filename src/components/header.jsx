"use client"
import Link from 'next/link'
import React from 'react'

export default function Header({ currentPlaying, lastPlayed, playlist }) {
  return (
    <div className='w-full p-5 font-medium text-[#e6e6e6] flex items-center justify-between text-xs sm:text-lg'>
      <Link 
      href="https://www.github.com/abimbola7" 
      target={"_blank"}
      className="text-[#1DB954] duration-200 transition-colors hover:text-[#1DB954]"
      >
        ABIMBOLA <br/>
        OLADOSU
      </Link>
      <div className='p-2 bg-white text-black rounded-lg'>
        {
          currentPlaying ? (
            'ONLINE'
          ) : (
            'OFFLINE'
          )
        }
      </div>
      <div>
        IBADAN, NG
      </div>
    </div>
  )
}
