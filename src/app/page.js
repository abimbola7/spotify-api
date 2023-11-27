import LastPlayed from "@/components/lastplayed"
import React from "react"
import queryString from 'query-string';
const tokenUrl = 'https://accounts.spotify.com/api/token';
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const current_song = `https://api.spotify.com/v1/me/player/currently-playing`;

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

  const { access_token } = await response.json();

  return await fetch(endpoint, 
    {
      method : "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
    );
};


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
  if (res.ok && res.status === 200) {
    return await res.json()
  } else
  if (res.ok && res.status === 204) {
    return "offline"
  } else
  if (!res.ok) {
    return error
  }
  // return res.status;
};

export default async function Home() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
  // const currentPlayingData = await getCurrentSong(clientId, clientSecret, refresh_token)
  const lastPlayedData = await getLastPlayed(clientId, clientSecret, refresh_token)
  // console.log(currentPlayingData)
  // console.log(currentPlayingData?.item?.name)
  console.log(lastPlayedData.items[0].track.name)

  return (
    <>
      <LastPlayed
      // currentPlaying={currentPlayingData}
      lastPlayed={lastPlayedData}
      />
    </>
  )
}
