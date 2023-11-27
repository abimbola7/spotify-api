"use client"
import { getLastPlayed } from "../../spotify";
import React from 'react'
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
// import queryString from 'query-string';
// import QueryString from 'qs';
// import querystring from "querystring"

// const clientId = '230afaf01b8741bd8e345484f16eccc5';
// const clientSecret = '85c443bfc58b4f9c8fb2bf94f79fd0de';
// const tokenUrl = 'https://accounts.spotify.com/api/token';
// const refresh_token='AQDZ8hK95v70e2jZ-y1jU0h6k4-25f0hE8n9hJ8bLhI1f901sW9iU3e4zZv811bW_tS835g'
// const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;


export default function NowPlaying () {
//   // const buff =  Buffer.from("hello world").toString("utf-8")
//   // console.log(basic)
//   const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
//   const makeApiRequest = async (
//     endpoint,
//     client_id,
//     client_secret,
//     refresh_token
//   ) => {
//     const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  
//     const response = await fetch(TOKEN_ENDPOINT, {
//       method: "POST",
//       headers: {
//         Authorization: `Basic ${basic}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: queryString.stringify({
//         grant_type: "refresh_token",
//         refresh_token,
//       }),
//     });
  
//     const { access_token } = await response.json();
  
//     return fetch(endpoint, {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     });
//   };

//   export const getLastPlayed = async (
//     client_id,
//     client_secret,
//     refresh_token
//   ) => {
//     return makeApiRequest(
//       LAST_PLAYED_ENDPOINT,
//       client_id,
//       client_secret,
//       refresh_token
//     );
//   };
//   // React.useEffect(()=>{
//   //   const getAccessToken = async () => {
//   //     const response = await fetch(tokenUrl, {
//   //       method: "POST",
//   //       headers: {
//   //           Authorization: `Basic ${basic}`,
//   //           "Content-Type": "application/x-www-form-urlencoded",
//   //       },
//   //       body: querystring.stringify({
//   //           grant_type: "refresh_token",
//   //           refresh_token
//   //       }),
//   //     });
//   //     // console.log(response.json())
//   //     return response.json();
//   //   }
//   //   const data = getAccessToken()

//   // },[])

//   // React.useEffect(() => {
//   //   const fetchData = async () => {
//   //     const options = {
//   //       method: 'POST',
//   //       headers: {
//   //         Authorization: `Basic ${basic}`,
//   //         'Content-Type': 'application/x-www-form-urlencoded',
//   //       },
//   //       // body: querystring.stringify({
//   //       //   grant_type: "refresh_token",
//   //       //   refresh_token : refresh_token
//   //       // }),
//   //       body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
//   //     };

//   //     const response = await fetch(tokenUrl, options);
//   //     const data = await response.json();
//   //     console.log(data)      // setAccessToken(data.access_token);
//   //   };

//   //   fetchData();
//   // }, []
//   // );
// React.useEffect(()=>{
//   getLastPlayed(clientId, clientSecret, refresh_token)
// }, [])
//   return (
//     <div>NowPlaying</div>
//   )
}
