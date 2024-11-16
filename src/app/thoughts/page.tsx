import Image from "next/image";
import fadeStyle from '../home/Fade.module.css'
import testStyle from './test.module.css'
import { Topbar } from "@/components/top";

import ClientPosts from "@/components/textpost";
import { Poem } from "@/components/poem";
import { RandomLainPic } from "@/components/randomlain";
import ServerPosts from "@/components/textpostsvr";
export default function Thoughts() {

    return (
        <div className={`w-full flex-grow text-black font-teste bg-black ${fadeStyle.fade}`}
                style={{
                    backgroundImage: "url(/sky3.jpg)",
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    //backgroundSize: '70%',
                }}             
        >
            <Topbar/>

            
            <main className="grid md:flex">             
                <section className="flex gap-5 w-full p-20 pr-5 pt-10 flex-col text-white">
                    <div className="border-2 border-white-900 h-full items-center h-fit">
                        <Poem/>
                    </div>

                    <RandomLainPic/>
                </section>                              
                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col">
                    <div className="border-2 border-white-900 items-center h-fit">
                        <div className="flex border-b-2 border-white-900 p-1 text-lg text-white">
                             thoughts... 
                             <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="grid p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                            <div className={`grid`}>
                                <ServerPosts/>

                                {/* <button onClick={start} className="underline">
                                    head empty no thoughts (for now)
                                    <Image src={'/nekoemptyhead.gif'}
                                        width={400}
                                        height={400}
                                        alt=""
                                        unoptimized
                                    />
                                </button> */}

                                {/* <span className={`${testStyle.div} text-white`}>
                                <p>At the top of a building, there's a black cat</p>
                                <p>Staring at the echo of a rusted toy</p>

                                <p>In a blink of an eye, a girl falls down</p>
                                <p>Accelerating memories are like burst open pomegranates</p>
                                <p>My vanishing guilt</p>
                                <p>The black cat laughs at the rusted fruit</p>
                                <p>Chewing, stabbing, his big ears</p>
                                <p>At the sunset, the black cat laughs at the girl's toy.</p>

                                <p>It’s red... My back is like</p>
                                <p>A shattered red glass orb  </p>

                                <p>I'm falling, wrapped in happiness</p>
                                <p>Free from despair</p>
                                <p>The red sun is sparkling</p>
                                <p>Waste glass, black ears</p>
                                <p>Black paws, melody and prayers</p>
                                <p>Embraced by the black cat, then smashed</p>
                                <p>Forsaken gravestones, corpses turning into angels</p>
                                </span>

                                <span className={`${testStyle.div2} text-white ml-auto`}>
                                <p>At the top of a building, there's a black cat</p>
                                <p>Staring at the echo of a rusted toy</p>

                                <p>In a blink of an eye, a girl falls down</p>
                                <p>Accelerating memories are like burst open pomegranates</p>
                                <p>My vanishing guilt</p>
                                <p>The black cat laughs at the rusted fruit</p>
                                <p>Chewing, stabbing, his big ears</p>
                                <p>At the sunset, the black cat laughs at the girl's toy.</p>

                                <p>It’s red... My back is like</p>
                                <p>A shattered red glass orb  </p>

                                <p>I'm falling, wrapped in happiness</p>
                                <p>Free from despair</p>
                                <p>The red sun is sparkling</p>
                                <p>Waste glass, black ears</p>
                                <p>Black paws, melody and prayers</p>
                                <p>Embraced by the black cat, then smashed</p>
                                <p>Forsaken gravestones, corpses turning into angels</p>
                                </span>                                

                                <span className={`${testStyle.div3} text-white center`}>
                                <p>At the top of a building, there's a black cat</p>
                                <p>Staring at the echo of a rusted toy</p>

                                <p>In a blink of an eye, a girl falls down</p>
                                <p>Accelerating memories are like burst open pomegranates</p>
                                <p>My vanishing guilt</p>
                                <p>The black cat laughs at the rusted fruit</p>
                                <p>Chewing, stabbing, his big ears</p>
                                <p>At the sunset, the black cat laughs at the girl's toy.</p>

                                <p>It’s red... My back is like</p>
                                <p>A shattered red glass orb  </p>

                                <p>I'm falling, wrapped in happiness</p>
                                <p>Free from despair</p>
                                <p>The red sun is sparkling</p>
                                <p>Waste glass, black ears</p>
                                <p>Black paws, melody and prayers</p>
                                <p>Embraced by the black cat, then smashed</p>
                                <p>Forsaken gravestones, corpses turning into angels</p>
                                </span>                                 */}

                            </div>
                        </span>                
                        <div> ∟</div>                    
                    </div>
                </section>     
            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-20">
                one day you'll sit in the sun and things won't feel so bad.
            </footer>
        </div>
    );
}
