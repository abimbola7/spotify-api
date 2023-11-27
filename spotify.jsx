// "use client"
// import React from 'react'
// import queryString from 'query-string';

// const clientId = '230afaf01b8741bd8e345484f16eccc5';
// const clientSecret = '85c443bfc58b4f9c8fb2bf94f79fd0de';
// const refresh_token='AQAndcOIObQpe51Q8vAuuu5inuF2RKlZomaVt_yRfGBzGyDOAtuQzhnowNgKcbBIJltSot8qX5ieQR9c_Fvv_5RcmKTOwQ5zf_8HA0S3Z7DLaUVooZJ5qJqJuMr6zqdc9tw'
// const tokenUrl = 'https://accounts.spotify.com/api/token';
// const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
// const current_song = `https://api.spotify.com/v1/me/player/currently-playing`;
// let playlist_endpoint;


// const makeApiRequest = async (
//   endpoint,
//   client_id,
//   client_secret,
//   refresh_token
// ) => {
//   const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

//   const response = await fetch(tokenUrl, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: queryString.stringify({
//       grant_type: "refresh_token",
//       refresh_token : refresh_token,
//     }),
//   });

//   const { access_token } = await response.json();
//   console.log(access_token)
//   console.log(endpoint)

//   return await fetch(endpoint, {
//     method : "GET",
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

// export const getLastPlayed = async (
//   client_id,
//   client_secret,
//   refresh_token
// ) => {
//   const res = await makeApiRequest(
//     LAST_PLAYED_ENDPOINT,
//     client_id,
//     client_secret,
//     refresh_token
//   );
//   console.log(await res.json())
//   return await makeApiRequest(
//     LAST_PLAYED_ENDPOINT,
//     client_id,
//     client_secret,
//     refresh_token
//   );
// };

// const getCurrentSong = async (
//   client_id,
//   client_secret,
//   refresh_token
// ) => {
//   const res = await makeApiRequest(
//     current_song,
//     client_id,
//     client_secret,
//     refresh_token
//   );
//   console.log(await res.json())
//   return await makeApiRequest(
//     current_song,
//     client_id,
//     client_secret,
//     refresh_token
//   );
// };

// getCurrentSong(clientId, clientSecret, refresh_token)

