'use client'

import { getRandomInt } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/navigation'
import Style from './sfxbutton.module.css'

export function SFXButton() {
  const clickSfx = [
    {value: "/lain/goodlook.mp3" },
    {value: "/lain/lainlaugh.mp3" },
    ]    
    const SFX : string = clickSfx[getRandomInt(0,1)].value;

    const router = useRouter()

    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio(SFX) : undefined
      );    

    const start = () => {                          
        audio.current?.play();
        setTimeout(() => {
            router.push('/home')
            }, 2500);            
    }

    return (
        <button className='flex w-screen h-screen text-clip overflow-hidden' onClick={start} > 
        <div className={`${Style.text} text-white text-opacity-[5.5%] font-bold pt-5`}>
          That's weird, isn't it? The whispers... What isn't remembered never happened. My body is merely a vessel for a higher power's will. To feel closer to someone is all I ever wanted, without having to look over my shoulder wondering if it's okay. Happy you know I'm dying while I dream. it’s always lovely in your company. An alien, who belongs nowhere. The visions... You're looking in every direction, but not up. As I fall down, I’m enveloped in happiness. I know despair no longer. Moving beyond concrete questions and entertaining nightmarish solutions. Born too early to explore the universe, born too late to explore the world. I'm real.. I-I've just got to be real. I'm alive, aren't I? I'm here.. I'm here, right now. And so we left the world behind. Comment te dire adieu. Whose eyes are those eyes? How wonderful will be the end of all things, as my body rots and I am destroyed. Memories can be painful, they can be a terrible burden. Sometimes, being able to forget is a... blessing. Eternity is a long time to collect bad memories. The voices... Do you like the dust we breathe? Heavy Is The Head That Falls With The Weight Of 1000 Thoughts. Can small stuff make you terrified? I can hardly tell if I am even breathing at this rate, are we alive out of spite? And then... The color of the world goes into photonegative... Prepare for Unforeseen Consequences. You’re inevitable — a horror beyond comprehension, an omen, a threat.The idea of being presented with a choice and choosing the "wrong" option is an incredibly powerful message. There is nothing fair about this existence that we only borrow for a time. To be alive…to walk this earth… That's the real curse right there. To die is merely abandon the flesh. I've already told you, haven't I? Go ahead. burn this moment into the retina of my eye. Accept and confine yourself in technology, accept your faults and imperfections, learn about your post-humanism and transhumanism. Euphoria in madness, nostalgia in futurism, artificial happiness in hidden sadness. And To Those I Love, Thanks For Sticking Around. Succumb to shock and fear. Whereof one cannot speak, thereof one must be silent. I could've gone anywhere. I'm here, so I'll be with you forever. Link Speed Demon. Lovely Sweet Dream. How do you feel? 
          That's weird, isn't it? The whispers... What isn't remembered never happened. My body is merely a vessel for a higher power's will. To feel closer to someone is all I ever wanted, without having to look over my shoulder wondering if it's okay. Happy you know I'm dying while I dream. it’s always lovely in your company. An alien, who belongs nowhere. The visions... You're looking in every direction, but not up. As I fall down, I’m enveloped in happiness. I know despair no longer. Moving beyond concrete questions and entertaining nightmarish solutions. Born too early to explore the universe, born too late to explore the world. I'm real.. I-I've just got to be real. I'm alive, aren't I? I'm here.. I'm here, right now. And so we left the world behind. Comment te dire adieu. Whose eyes are those eyes? How wonderful will be the end of all things, as my body rots and I am destroyed. Memories can be painful, they can be a terrible burden. Sometimes, being able to forget is a... blessing. Eternity is a long time to collect bad memories. The voices... Do you like the dust we breathe? Heavy Is The Head That Falls With The Weight Of 1000 Thoughts. Can small stuff make you terrified? I can hardly tell if I am even breathing at this rate, are we alive out of spite? And then... The color of the world goes into photonegative... Prepare for Unforeseen Consequences. You’re inevitable — a horror beyond comprehension, an omen, a threat.The idea of being presented with a choice and choosing the "wrong" option is an incredibly powerful message. There is nothing fair about this existence that we only borrow for a time. To be alive…to walk this earth… That's the real curse right there. To die is merely abandon the flesh. I've already told you, haven't I? Go ahead. burn this moment into the retina of my eye. Accept and confine yourself in technology, accept your faults and imperfections, learn about your post-humanism and transhumanism. Euphoria in madness, nostalgia in futurism, artificial happiness in hidden sadness. And To Those I Love, Thanks For Sticking Around. Succumb to shock and fear. Whereof one cannot speak, thereof one must be silent. I could've gone anywhere. I'm here, so I'll be with you forever. Link Speed Demon. Lovely Sweet Dream. How do you feel?
        </div>        
        </button>
    )
}