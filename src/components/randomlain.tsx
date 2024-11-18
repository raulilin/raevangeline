import Image from "next/image";
import { getRandomInt, openInNewTab, getRandomIntCryp } from "@/lib/utils";
import styles from '../app/home/Glitch.module.css'

export function RandomLainPic() {
    const idTest = getRandomIntCryp(0,22) + 1

    
    function randomLain() : string {       
        const lainpic = "/catpics/"+idTest+".png"
        return lainpic
    }

    return (
        <div className="border-2 border-pink-900 h-full h-fit">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                random lain(my cat) pic no#{idTest + 1}
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
    )
}