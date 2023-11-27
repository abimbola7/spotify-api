import React from 'react'
import { getLastPlayed } from '../../../spotify'

export default function Card(props) {
  // React.useEffect(()=>{
      // const response  = getLastPlayed(clientId, clientSecret, refresh_token)
      // console.log(response)
    // }, [])
  const classes = `${props.className} w-[24rem] max-w-[85%] py-7 px-2 rounded-xl bg-[#121212] text-white`
  return (
    <div className={classes}>{props.children}</div>
  )
}
