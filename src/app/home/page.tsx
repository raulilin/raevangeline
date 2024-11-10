'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './Glitch.module.css'
import fadeStyle from './Fade.module.css'
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { getRandomInt } from "@/lib/utils";

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

    function randomSong() : string {       
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
            <header className="p-20 pb-0">

                <div className="border-2 border-pink-900 text-4xl p-4 font-extrabold">
                    <div className="flex text-5xl">                    
                        <span className="flex flex-col">
                        <p className= {`${styles.glitch} ${styles.layers}`} data-text="Eva's(ra) domain"><span>risoro/marunio</span></p>
                        <p className= {`text-[23px] ${styles.glitch} ${styles.layers}`} data-text="Eva's(ra) domain"><span>ra's safe haven</span></p>
                        </span>
                        <span className="flex ml-auto text-sm items-center gap-3">
                            click for a random song →
                            <button onClick={() => openInNewTab (randomSong()) }>
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

                <div className="border-2 border-t-0 border-pink-900 text-1xl p-1">
                    <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer"> last.fm </a>
                    | 
                    <a href="https://steamcommunity.com/id/ralilith/" target="_blank" rel="noopener noreferrer"> steam </a> 
                    | 
                    <a href="https://www.backloggd.com/u/ralilith/" target="_blank" rel="noopener noreferrer"> backloggd </a> 
                    | 
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
                             WHO AM I?
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                            <p>:0 i'm ra (ralilith, evangeline), 23 y/o </p>                   
                        </span>                
                        <div> ∟</div>                    
                    </div>

                    <div className="border-2 border-pink-900 h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            interests
                        </div>
                        <div className="flex items-center p-6 gap-8">
                            <span>Games</span> 
                            <p className="w-full text-center">MMOs, JRPGs, rhythm games, souls-likes, metroidvanias, VNs, Fighting games</p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">                            
                            <a href="https://www.last.fm/user/Raulilin" target="_blank" rel="noopener noreferrer"> Music </a>
                            <p className="w-full text-center">Machinel Girl, Crystal Castles, Loathe, My Bloody Valentine, Femtanyl, Black Dresses, BMTH, Sewerslvt, Goreshit, Have a Nice Life, Grimes, Ichiko Aoba, Katie Jane Garside, Blank Banshee, YABUJIN, Ecco2k</p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">
                            <p>Movies</p> 
                            <p className="w-full text-center">all about lily chou chou, oldboy, requiem for a dream, angel's egg, hereditary, midsommar, mulholland drive, rosemary's baby, taxi driver </p>
                        </div>
                        <div className="flex items-center p-6 gap-8 border-t">
                            <p>Television</p> 
                            <p className="w-full text-center">serial experiments lain</p>
                        </div>
                    </div>

               
                </section>    
                
                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col">
                    <div className="border-2 border-pink-900 h-full items-center h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            I could've gone anywhere.
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                            <p>I thought I should. I should've said it. But I thought, maybe I should have done it. I could've changed the course in line. I could've met you down there. I could've left them over here.</p>
                            <p>I could've gone anywhere.</p>
                            <p>Over here, under there. I could step sideways right now, I could. Well, I could. Couldn't I? Right now, I could do that right now. Couldn't I? Shall I? Shall I? Shall I do that right now? Shall I? What do you think? I could, but I'm not sure if I will. If that's the right thing to do. God will show me a sign. I'll wait till I see a sign.</p>
                            <p>--KatieJane Garside - In the Kitchen</p>
                        </span>                
                        <div> ∟</div>                    
                    </div>

                    <div className="border-2 border-pink-900 h-full h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            random lain(my cat) pic
                        </div>
                        <div className="flex items-center p-6 justify-center">

                            <Image src={randomLain()}
                                width={450}
                                height={450}
                                alt=""
                            />
                        </div>            
                    </div>
                </section>                   

            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                one day you'll sit in the sun and things won't feel so bad.
            </footer>
        </div>
    );
}
