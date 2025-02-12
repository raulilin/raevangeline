import Image from "next/image";
import Link from "next/link";
import styles from './Glitch.module.css'
import fadeStyle from './Fade.module.css'
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { getRandomInt, getRandomIntCryp } from "@/lib/utils";
import { Topbar } from "@/components/top";
import { Poem } from "@/components/poem";
import { RandomLainPic } from "@/components/randomlain";
import { NekoButton } from "@/components/nekobutton";

export default function Home() {
    let sideImg = getRandomIntCryp(0,7) + 1
    console.log(sideImg)    

    return (
        <div className={`w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}    
        >     
            <Topbar/>

            <main className="grid md:flex ">
                <div>
                <aside className="ml-20 mt-10 border-2 border-pink-900 h-fit hidden sm:flex bg-black">
                    <div className="flex items-center  justify-center ">

                        <Image src={'/side/'+sideImg+'.png'}
                            width={840}
                            height={100}                            
                            alt=""
                            unoptimized
                        />
                    </div>                        
                </aside>

                <div className="ml-20 mt-10 border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0 flex justify-center">
                            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                                <a href="https://open.spotify.com/user/sjqqt4d7ebxsfjbs0rc827zh5?si=e79e7754e1754a83" className="underline">random playlists (click 4 spotify prof.)</a>
                                <p className="ml-auto">X</p>
                            </div>
                            <div className="rotate-180"> ∟</div>
                            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto items-center">
                                <a href="https://youtube.com/playlist?list=PL9_cNAAdrqE6jmOFn3FwTaeRZviSHUurW&si=pzmd2Ecu5mg_jjTD" className="underline">unorganized vgm collection</a>
                                <span className="flex gap-3">
                                <a href="https://open.spotify.com/playlist/4ajQQmnCv0ozK0KZak8Bxl?si=7f2184618fee479f" className="underline">relax</a>
                                <a href="https://open.spotify.com/playlist/0nBt2yTNtM0TjdEQKdE5k4?si=316c6b59cec64057" className="underline">gore n bass</a>
                                <a href="https://open.spotify.com/playlist/5LffZp441rSlwHC42k5p8S?si=b42f562cef4f48ec" className="underline">ethereal</a>
                                <a href="https://open.spotify.com/playlist/4BhmLN15pW2XF1c45kPkW2?si=e6bb4d015cad401a" className="underline">mixed</a>
                                </span>
                                
                            </span>                
                            <div> ∟</div>                     
                </div>

                </div>
                <div className="grid grid-cols-2">
                    <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col pr-0">
                        
                        <div className="border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0">
                            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                                WHO AM I? :0 
                                <p className="ml-auto">X</p>
                            </div>
                            <div className="rotate-180"> ∟</div>
                            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                                <p> {'>'} welcome to my safe haven  </p>
                                <p> {'>'} i'm ra (ralilith, evangeline in some places or games),  </p>
                            </span>                
                            <div> ∟</div>                    
                        </div>

                        <div className="border-2 border-pink-900 h-fit bg-black mr-5 sm:mr-0">
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

                        <div className="border-2 border-pink-900 items-center h-fit bg-black mr-5 sm:mr-0">
                            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                                <a href="https://open.spotify.com/user/sjqqt4d7ebxsfjbs0rc827zh5?si=e79e7754e1754a83" className="underline">random playlists (click 4 spotify prof.)</a>
                                <p className="ml-auto">X</p>
                            </div>
                            <div className="rotate-180"> ∟</div>
                            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto items-center">
                                <a href="https://youtube.com/playlist?list=PL9_cNAAdrqE6jmOFn3FwTaeRZviSHUurW&si=pzmd2Ecu5mg_jjTD" className="underline">unorganized vgm collection</a>
                                <span className="flex gap-3">
                                <a href="https://open.spotify.com/playlist/4ajQQmnCv0ozK0KZak8Bxl?si=7f2184618fee479f" className="underline">relax</a>
                                <a href="https://open.spotify.com/playlist/0nBt2yTNtM0TjdEQKdE5k4?si=316c6b59cec64057" className="underline">gore n bass</a>
                                <a href="https://open.spotify.com/playlist/5LffZp441rSlwHC42k5p8S?si=b42f562cef4f48ec" className="underline">ethereal</a>
                                <a href="https://open.spotify.com/playlist/4BhmLN15pW2XF1c45kPkW2?si=e6bb4d015cad401a" className="underline">mixed</a>
                                </span>
                                
                            </span>                
                            <div> ∟</div>                    
                        </div>
                
                    </section>    
                    
                    <section className="grid gap-5 w-full p-20 pl-5 pt-10  h-fit">
                        <div className="border-2 border-pink-900 h-full items-center h-fit bg-black ">
                            <Poem/>
                        </div>

                        <RandomLainPic/>                    
                    </section>      
                </div>             
            </main>

                
            
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                one day you'll sit in the sun and things won't feel so bad.
            </footer>
        </div>
    );
}
