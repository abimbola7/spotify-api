import React from 'react'
import { getLastPlayed } from '../../../spotify'

export default function Card(props) {
  // React.useEffect(()=>{
      // const response  = getLastPlayed(clientId, clientSecret, refresh_token)
      // console.log(response)
    // }, [])
  const classes = `${props.className} w-[22rem] max-w-[85%] py-6 px-3  rounded-xl bg-[#121212] text-white`
  return (
    <div className={`${classes} backdrop-blur-3xl backdrop-brightness-100 backdrop-contrast-200 backdrop-filter `}>{props.children}</div>
  )
}
