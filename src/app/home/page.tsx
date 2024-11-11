'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './Glitch.module.css'
import fadeStyle from './Fade.module.css'
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { getRandomInt } from "@/lib/utils";
import { Topbar } from "@/components/top";
import { Poem } from "@/components/poem";
import { RandomLainPic } from "@/components/randomlain";

export default function Home() {
      
    function randomLain() : string {       
        const id = getRandomInt(0,4) 
        const lainpics = [
            { id: 1, value: "/lain/catpics/lain1.png" },
            { id: 2, value: "/lain/catpics/lain2.png" },
            { id: 3, value: "/lain/catpics/lain3.png" },
            { id: 4, value: "/lain/catpics/lain4.png" },
            { id: 5, value: "/lain/catpics/lain5.png" },
        ]
        return lainpics[id]?.value + ""
    }
    
    const navitems = [
        { id: 1, value: "/lain/catpics/lain1.png" },
        { id: 2, value: "/lain/catpics/lain2.png" },
        { id: 3, value: "/lain/catpics/lain3.png" },
        { id: 4, value: "/lain/catpics/lain4.png" },
        { id: 4, value: "/lain/catpics/lain5.png" },
    ]    

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function randomText() : string {       
        const id = getRandomInt(0,4) 
        const songs = [
            { id: 1, href: "https://www.youtube.com/watch?v=D9R2F3X8ZZY", name:"In the Arms of Flowers" },
            { id: 2, href: "https://www.youtube.com/watch?v=E1ygYzHULyc", name:"Favriel" },
            { id: 3, href: "https://www.youtube.com/watch?v=WMlS_OPw3gM", name:"For You I Hold My Breath" },
            { id: 4, href: "https://youtu.be/gm17vgmh854", name:"Sunbeams Streaming Through Leaves On The Hill" },
            { id: 5, href: "https://youtu.be/KiBLak6m-ig", name:"l'ange a contre jour" },
        ]
        return songs[id]?.href + ""
    }    

    return (
        <div className={`w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
        >
            <Topbar></Topbar>

            <main className="grid md:flex">
                <aside className="ml-20 mt-10 border-2 border-pink-900 h-fit hidden sm:flex">
                    <div className="flex items-center  justify-center ">

                        <Image src={'/lain/lainside.png'}
                            width={1040}
                            height={100}
                            alt=""
                            unoptimized
                        />
                    </div>                        
                </aside>

                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col pr-0">
                    <div className="border-2 border-pink-900 items-center h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                             WHO AM I? :0 
                             <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                            <p> {'>'} welcome to my safe haven  </p>
                            <p> {'>'} i'm ra (ralilith, evangeline in some places),  </p>
                        </span>                
                        <div> ∟</div>                    
                    </div>

                    <div className="border-2 border-pink-900 h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            interests
                            <p className="ml-auto">X</p>
                        </div>
                        <div className="flex items-center p-6 gap-8">
                        <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Games </a>
                            <p className="w-full text-center">MMOs, JRPGs, rhythm games, souls-likes, metroidvanias, VNs, Fighting games</p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">                            
                            <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer" className="underline"> Music </a>
                            <p className="w-full text-center">Grimes, Katie Jane Garside, Machinel Girl, Crystal Castles, Loathe, My Bloody Valentine, Femtanyl, Black Dresses, BMTH, Sewerslvt, Goreshit, Have a Nice Life, Ichiko Aoba, Blank Banshee, YABUJIN, Ecco2k...</p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">
                            <a href="https://letterboxd.com/ralilith/" target="_blank" rel="noopener noreferrer" className="underline"> Movies </a>
                            <p className="w-full text-center">all about lily chou chou, oldboy, requiem for a dream, angel's egg, hereditary, midsommar, mulholland drive, rosemary's baby, taxi driver...</p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">
                            <p>Anime</p> 
                            <p className="w-full text-center">serial experiments lain</p>
                        </div>
                    </div>

               
                </section>    
                
                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col">
                    <div className="border-2 border-pink-900 h-full items-center h-fit">
                        <Poem/>
                    </div>

                    <RandomLainPic/>
                </section>                   

            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                one day you'll sit in the sun and things won't feel so bad.
            </footer>
        </div>
    );
}
