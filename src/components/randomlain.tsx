import Link from "next/link";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import Image from "next/image";
import { getRandomInt, openInNewTab } from "@/lib/utils";
import styles from '../app/home/Glitch.module.css'

export function RandomLainPic() {

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

    return (
        <div className="border-2 border-pink-900 h-full h-fit">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                random lain(my cat) pic
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