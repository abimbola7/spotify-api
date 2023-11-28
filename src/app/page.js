import LastPlayed from "@/components/lastplayed"
import React from "react"
import queryString from 'query-string';
const tokenUrl = 'https://accounts.spotify.com/api/token';
const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const current_song = `https://api.spotify.com/v1/me/player/currently-playing`;
// let playlist_id;
// const playlist_endpoint = `https://api.spotify.com/v1/playlists/${playlist_id}`
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


export const getLastPlayed = async (
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

export const getPlaylist = async (
  client_id,
  client_secret,
  refresh_token, 
  id
) => {
  console.log(id, "IIIIIIIIID")
  const res = await makeApiRequest(
    'https://api.spotify.com/v1/playlists/' + id,
    client_id,
    client_secret,
    refresh_token,
  );
  return await res.json();
};

export const getCurrentSong = async (
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
    const data = await res.json();
    const playlist_id = await (data.context?.uri).split(":")[2]
    const playss = await getPlaylist(client_id,client_secret,refresh_token,playlist_id)
    return {data, playss};
    // return await res.json()
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
  const {data:currentPlayingData, playss} = await getCurrentSong(clientId, clientSecret, refresh_token)
  console.log(playss, "JHDFHKFKKJFKJ")
  const lastPlayedData = await getLastPlayed(clientId, clientSecret, refresh_token)
  // const playlists = await getPlaylist(clientId, clientSecret, refresh_token)
  // console.log(playlists, "PLAYLOSYYYYYYTTTT")
  // console.log(currentPlayingData)
  // console.log(currentPlayingData?.item?.name)
  // console.log(lastPlayedData.items[0].track.name)

  return (
    <>
      <LastPlayed
      currentPlaying={currentPlayingData}
      lastPlayed={lastPlayedData}
      playlist={playss}
      />
    </>
  )
}
