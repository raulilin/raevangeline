'use client'
import { getSongList } from "@/app/api"
import { getRandomInt, openInNewTab } from "@/lib/utils"
import { songs } from "@/types/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SongButton() {
    const [songlist, setSonglist] = useState<songs[] | null>([])
  
    useEffect(() => {
        getSongList().then(data => setSonglist(data))
    }, [])

    function randomSong() : string {
        const id = getRandomInt(0,16)
        return songlist?.at(id)?.songs_href + ""
    }

    return (
        <button onClick={() => openInNewTab(randomSong()) }>
        <Image src={'/eye.gif'}
                width={75}
                height={0}
                alt=""
                unoptimized
            />
        </button>
    )
}