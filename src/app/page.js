"use client"
import LastPlayed from "@/components/lastplayed"
import NowPlaying from "@/components/nowplaying"
import Card from "@/components/ui/card"
import React from "react"
import { getLastPlayed } from "../../spotify";


// {
//   "access_token": "BQCBnL4280c51v70e2jZ-y1jU0h6k4-25f0hE8n9hJ8bLhI1f901sW9iU3e4zZv811bW_tS835g",
//   "token_type": "Bearer",
//   "expires_in": 3600,
//   "scope": "user-library-read",
//   "refresh_token": "AQDZ8hK95v70e2jZ-y1jU0h6k4-25f0hE8n9hJ8bLhI1f901sW9iU3e4zZv811bW_tS835g"
// }


export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
  // const myprocess = process.env.MY_PRO
  console.log(clientId, clientSecret, refresh_token)
  const response  =  getLastPlayed(clientId, clientSecret, refresh_token)
  console.log(response)
  return (
    <>
      {/* <Card /> */}
      {/* <NowPlaying /> */}
      <LastPlayed data={"data"}/>
    </>
  )
}
