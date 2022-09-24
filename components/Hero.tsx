import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"

type Props = {}

function Hero({}: Props) {

  const {text, count} = useTypewriter({
    words: [
      "Hi, My Name is Brian Spencer",
      "Guy-Who-Loves-To-Code.tsx",
      "<ButLovesHisCorgiMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  })


  return (
    <div>
      <p>{text}</p>
      <Cursor />
    </div>
  )
}


export default Hero;