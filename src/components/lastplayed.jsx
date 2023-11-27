"use client"
import React from 'react'
import Card from './ui/card'
import { getLastPlayed } from '../../spotify'

export default function LastPlayed({ data }) {
  // const clientId = process.env.SPOTIFY_CLIENT_ID;
  // const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  // const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
  // const myprocess = process.env.MY_PRO
  // console.log(clientId, clientSecret, refresh_token, myprocess)
  // console.log(process.env)
  // const response  = getLastPlayed(clientId, clientSecret, refresh_token)
  console.log(data)
  return (
    <Card>
      Last Played
    </Card>
  )
}
