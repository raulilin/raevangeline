import Link from "next/link";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import Image from "next/image";
import { getRandomInt, openInNewTab } from "@/lib/utils";
import styles from '../app/home/Glitch.module.css'
import { SongButton } from "./songbutton";

export function Topbar() {

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
                    <SongButton/>
                </span>
            </div>
        </div>

        <div className="hidden md:flex border-2 border-t-0 border-pink-900 text-1xl p-1 gap-1 underline ">
            <Link href={"/thoughts"} className="flex"> 
                <Image src={'/new.gif'}
                                width={30}
                                height={5}
                                alt=""
                                unoptimized
                />
                thoughts 
            </Link>
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