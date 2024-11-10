'use client'

import { useEffect, useState } from 'react'
import Style from './Intro.module.css'
import { useRouter } from 'next/navigation'

export default function IntroPage() {
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
    <div className='bg-black w-screen h-screen'>
        <div className={`${Style.fade} h-screen w-screen`}
            style={{
                backgroundImage: 'url(/lain/lainbgintro.gif)',
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '70%',
            }}        
        >
            <button className='w-screen h-screen' onClick={start}/>
            
        </div>
    </div>
    )
}