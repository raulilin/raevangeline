import { getPoems } from "@/app/api";
import { getRandomInt } from "@/lib/utils"

export async function Poem() {
    
    const poems = await getPoems();

    let maxid :number | undefined = 0

    const id = getRandomInt(0,maxid);
    
    return (
        <div className="border-1 border-pink-900 items-center h-fit">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                {poems?.at(0)?.poems_title}
                <p className="ml-auto">X</p>
            </div>
            <div className="rotate-180"> ∟</div>
            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto whitespace-pre-wrap">
                {poems?.at(0)?.poems_text}
            </span>
            <div> ∟</div>
        </div>
    )
}