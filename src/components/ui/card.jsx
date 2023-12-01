import React from 'react'

export default function Card(props) {
  const classes = `${props.className} relative w-[26rem] max-w-[85%] py-6 px-4 rounded-xl bg-[#4f4b4b] text-white`
  return (
    <div className={`${classes}`}>{props.children}</div>
  )
}
