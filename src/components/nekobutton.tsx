'use client'

import { getRandomInt } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/navigation'
import Style from './sfxbutton.module.css'
import Image from "next/image"

export function NekoButton() {
  const clickSfx = [
    {value: "/lain/necoarc.mp3" },
    {value: "/lain/necoarc.mp3" },
    ]    
    const SFX : string = clickSfx[getRandomInt(0,1)].value;

    const router = useRouter()

    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("/necoarc.mp3") : undefined
      );    

    const start = () => {                          
        audio.current?.play();    
    }

    return (
        <button className='' onClick={start} > 
          <Image src={'/nekoemptyhead.gif'}
              width={200}
              height={100}
              alt=""
              unoptimized
          />
        </button>
    )
}