'use client'

import { getRandomInt } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export function SFXButton() {
    const router = useRouter()

    const [audio, setAudio] = useState(new Audio())

    useEffect(() => {
      setAudio(new Audio("/lain/goodlook.mp3"))
    }, [])
    
    const start = () => {                    
        audio.play();             
        setTimeout(() => {
            router.push('/home')
            }, 2500);            
    }

    return (
        <button className='w-screen h-screen' onClick={start}/>
    )
}