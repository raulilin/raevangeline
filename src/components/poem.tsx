import { getRandomInt } from "@/lib/utils"

export function Poem() {
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
    )
}