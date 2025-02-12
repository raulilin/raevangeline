import Image from "next/image";
import fadeStyle from '../home/Fade.module.css'
import testStyle from './test.module.css'
import { Topbar } from "@/components/top";

import ClientPosts from "@/components/textpost";
import { Poem } from "@/components/poem";
import { RandomLainPic } from "@/components/randomlain";
import ServerPosts from "@/components/textpostsvr";
import { getRandomIntCryp } from "@/lib/utils";
export default function Thoughts() {

    const idTest = getRandomIntCryp(0,18) + 1

    
    function randomLain() : string {       
        //const idTest = getRandomInt(0,7) + 1
        const lainpic = "/randompics/"+idTest+".png"

        const lainpics = [
            { id: 1, value: "/lain/catpics/lain1.png" },
            { id: 2, value: "/lain/catpics/lain2.png" },
            { id: 3, value: "/lain/catpics/lain3.png" },
            { id: 4, value: "/lain/catpics/lain4.png" },
            { id: 5, value: "/lain/catpics/lain5.png" },
            { id: 6, value: "/lain/catpics/lain6.png" },
            { id: 7, value: "/lain/catpics/lain7.png" },
            { id: 8, value: "/lain/catpics/lain8.png" },            
        ]
        //return lainpics[id]?.value + ""
        return lainpic
    }

    return (
        <div className={`font-white w-full flex-grow text-black font-teste bg-black ${fadeStyle.fade} h-full`}
                style={{
                    backgroundImage: "url(/sky3.jpg)",
                    height: "100%",
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    //backgroundSize: 'auto',
                    backgroundSize: 'cover',
                }}             
        >
            <Topbar/>

            
            <main className="grid sm:grid-cols-3">
                <section className="flex gap-5 w-full p-20 pr-5 pt-10 flex-col text-white h-fit">
                    <div className="border-2 border-white-900 h-full items-center h-fit">
                        <Poem/>
                    </div>

                    <div className="border-2 border-white h-full h-fit">
                        <div className="flex border-b-2 border-white p-1 text-lg">
                            random pic no#{idTest + 1}
                            <p className="ml-auto">X</p>
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

                <section className="flex gap-5 w-full p-20 pl-5 pt-10 flex-col col-span-2">
                    <div className="border-2 border-white-900 items-center h-fit">
                        <div className="flex border-b-2 border-white-900 p-1 text-lg text-white">
                             thoughts... 
                             <p className="ml-auto">X</p>
                        </div>
                        <div className="rotate-180"> ∟</div>
                        <span className="grid p-5 gap-3 text-sm xl:text-[15px] pt-auto">
                            <div className={`grid`}>
                                <ServerPosts/>
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
