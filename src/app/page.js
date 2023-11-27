// "use client"
import LastPlayed from "@/components/lastplayed"
import NowPlaying from "@/components/nowplaying"
import Card from "@/components/ui/card"
import React from "react"
// import { getLastPlayed, getCurrentSong } from "../../spotify";
import queryString from 'query-string';
const tokenUrl = 'https://accounts.spotify.com/api/token';
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const current_song = `https://api.spotify.com/v1/me/player/currently-playing`;


// {
//   "access_token": "BQCBnL4280c51v70e2jZ-y1jU0h6k4-25f0hE8n9hJ8bLhI1f901sW9iU3e4zZv811bW_tS835g",
//   "token_type": "Bearer",
//   "expires_in": 3600,
//   "scope": "user-library-read",
//   "refresh_token": "AQDZ8hK95v70e2jZ-y1jU0h6k4-25f0hE8n9hJ8bLhI1f901sW9iU3e4zZv811bW_tS835g"
// }

const makeApiRequest = async (
  endpoint,
  client_id,
  client_secret,
  refresh_token
  ) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(tokenUrl, {
    method: "POST",
    cache : "no-store",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token : refresh_token,
    },),
  });

  // console.log(await response.json(), "fffffff")
  const { access_token } = await response.json();
  // const { access_token } = "wwwwww3w"
  console.log(access_token, "Ffff")
  console.log(endpoint)

  return await fetch(endpoint, 
    {
      method : "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
    );
};

// const clientId = process.env.SPOTIFY_CLIENT_ID;
// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const getLastPlayed = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const res = await makeApiRequest(
    LAST_PLAYED_ENDPOINT,
    client_id,
    client_secret,
    refresh_token,
  );
  return await res.json();
  // return await makeApiRequest(
  //   LAST_PLAYED_ENDPOINT,
  //   client_id,
  //   client_secret,
  //   refresh_token,
  // );
};

const getCurrentSong = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const res = await makeApiRequest(
    current_song,
    client_id,
    client_secret,
    refresh_token,
  );
  // console.log(await res.json())
  return await res.json()
  // return await makeApiRequest(
  //   current_song,
  //   client_id,
  //   client_secret,
  //   refresh_token
  // );
};

export default async function Home() {
  // const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  // const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  // const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
  // const data = await getCurrentSong()
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
  const currentPlayingData = await getCurrentSong(clientId, clientSecret, refresh_token)
  const lastPlayedData = await getLastPlayed(clientId, clientSecret, refresh_token)
  console.log(currentPlayingData.item.name)
  console.log(lastPlayedData.items[0].track.name)
  // console.log(lastPlayedData[0].items.track.name, "LASSSSSTTTSTSTSTpLAYAYA")
  // console.log(data, "ddddd")
  // console.log(clientId, clientSecret, refresh_token)


  // React.useEffect(()=>{
  //   const getEndpoints = async () => {
  //     const resLastPlayed  = await getLastPlayed(clientId, clientSecret, refresh_token)
  //     const resCurrent  = await getCurrentSong(clientId, clientSecret, refresh_token)
  //     console.log(await resLastPlayed.json())
  //     console.log(await resCurrent.json())
  //   }
  //   getEndpoints()
  // }, [clientId, clientSecret, refresh_token])

  return (
    <>
      {/* <Card /> */}
      {/* <NowPlaying /> */}
      <LastPlayed data={"data"}/>
    </>
  )
}
