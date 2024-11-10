'use client'

import { getRandomInt } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/navigation'

export function SFXButton() {
    const router = useRouter()

    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("/lain/goodlook.mp3") : undefined
      );    

    const start = () => {                          
        audio.current?.play();
        setTimeout(() => {
            router.push('/home')
            }, 2500);            
    }

    return (
        <button className='w-screen h-screen' onClick={start}/>
    )
}