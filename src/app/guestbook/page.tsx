'use client'
import Image from "next/image";
import fadeStyle from '../home/Fade.module.css'
import { Topbar } from "@/components/top";
import { useRef } from "react";
import Form from 'next/form'

export default function Guestbook() {
    const audio = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("/necoarc.mp3") : undefined
      );    

    const start = () => {
        audio.current?.play(); 
    }
      
    return (
        <div className={`w-full flex-grow text-white font-teste bg-black ${fadeStyle.fade}`}
        >
            <Topbar/>

            <main className="grid md:flex">                    
                <section className="flex gap-5 w-full p-20 pt-10 flex-col">
                    <div className="border-2 border-pink-900 items-center h-fit">
                        <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                            guestbook
                             <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="grid p-5 gap-3 text-sm xl:text-[15px] pt-auto justify-center text-center ">
                            {/* <Form action="/search" className="grid text-black">
                                <input name="query" />
                                <button type="submit" className="text-white">Submit</button>
                            </Form> */}

                            <button onClick={start} className="underline">                            
                                WIP                            
                                <Image src={'/nekowip.gif'}
                                    width={400}
                                    height={400}
                                    alt=""
                                    unoptimized
                                />
                            </button>                            
                        </span>                
                        <div> ∟</div>                    
                    </div>
                </section>     
            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                one day you'll sit in the sun and things won't feel so bad.
            </footer>
        </div>
    );
}
