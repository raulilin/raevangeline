import Link from "next/link";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import Image from "next/image";
import { getRandomInt, openInNewTab } from "@/lib/utils";
import styles from '../app/home/Glitch.module.css'

export function Topbar() {

    function randomSong() : string {       
        const id = getRandomInt(0,16) 
        const songs = [
            {href: "https://www.youtube.com/watch?v=D9R2F3X8ZZY", name:"In the Arms of Flowers" },
            {href: "https://www.youtube.com/watch?v=E1ygYzHULyc", name:"Favriel" },
            {href: "https://www.youtube.com/watch?v=WMlS_OPw3gM", name:"For You I Hold My Breath" },
            {href: "https://youtu.be/gm17vgmh854", name:"Sunbeams Streaming Through Leaves On The Hill" },
            {href: "https://youtu.be/KiBLak6m-ig", name:"l'ange a contre jour" },
            {href: "https://youtu.be/Wvlc95ZVDJU", name:"Subterranean Values" },
            {href: "https://youtu.be/Jov3ktx1uF0", name:"Play Dead" },
            {href: "https://youtu.be/tfGjf7jSFc8", name:"False Moon" },
            {href: "https://youtu.be/H-fetNUKqDM", name:"Life Imitates Life" },
            {href: "https://youtu.be/ZGCckws9SJI", name:"MURDER EVERY 1 U KNOW!" },
            {href: "https://youtu.be/WdBd7ujTBKM", name:"Rosa" },
            {href: "https://youtu.be/S7zHZrcHdxg", name:"So You Wanna Be A Superhero" },
            {href: "https://youtu.be/0GYUcFIBXq4", name:"I Found The End" },
            {href: "https://youtu.be/12mwzwUL7Vk", name:"Arabesque" },
            {href: "https://youtu.be/NV_R2mwrQ_w", name:"Glide" },
            {href: "https://youtu.be/zL1B74qaN-c", name:"The Final Smile" },
            {href: "https://youtu.be/Cl9FQIT-6iY", name:"Remember" },
            
        ]
        return songs[id]?.href + ""
    }

    return (
        <header className="p-8 pb-0">

        <div className="border-2 border-pink-900 text-4xl p-4 font-extrabold">
            <div className="grid sm:flex text-5xl">                    
                <span className="flex flex-col">
                    <p data-text="Eva's(ra) domain"><span>risoro - WIP</span></p>
                    <Link href={"/home"}>
                        <p className= {`text-[23px] underline ${styles.glitch} ${styles.layers}`} data-text="Eva's(ra) domain"><span>ra's safe haven</span></p>
                    </Link>
                </span>
                <span className="flex ml-auto text-sm items-center gap-3">
                    click for a random song →
                    <button onClick={() => openInNewTab(randomSong()) }>
                        <Image src={'/lain/eye.gif'}
                                width={75}
                                height={0}
                                alt=""
                                unoptimized
                        />
                    </button>
                </span>
            </div>
        </div>

        <div className="hidden md:flex border-2 border-t-0 border-pink-900 text-1xl p-1 gap-1 underline">
            <Link href={"/thoughts"}> thoughts </Link>
            | 
            <Link href={"/guestbook"}> guestbook </Link>
            |             
            <a href="https://steamcommunity.com/id/ralilith/" target="_blank" rel="noopener noreferrer"> steam </a> 
            | 
            <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer"> backloggd </a> 
            | 
            <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer"> last.fm </a>
        </div>
        <div className="grid md:hidden border-2 border-t-0 border-pink-900 text-1xl p-1 justify-center">
            <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer"> last.fm </a>
         
            <a href="https://steamcommunity.com/id/ralilith/" target="_blank" rel="noopener noreferrer"> steam </a> 
            
            <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer"> backloggd </a> 
            
            Guestbook(soon)
        </div>

        <div className="border-2 border-t-0 border-pink-900 text-4xl font-bold p-1">
        <VelocityScroll
            text="Favriel | In the Arms of Flowers | Subterranean Values | XMAS_EVET10 [120][thanaton3 mix] | What isn't remembered never happened. | Make me sad. Make me mad. Make me feel alright?  Make me feel alright? |"
            default_velocity={1}
            className="text-center md:leading-[5rem]"
        />             
        </div>      
    </header>
    )
}