import { getRandomInt } from "@/lib/utils"

export function Poem() {

    const id = getRandomInt(0,5);

    const poems = [
        { name: "I could've gone anywhere.", text: "I thought I should. I should've said it. But I thought, maybe I should have done it. I could've changed the course in line. I could've met you down there. I could've left them over here. \n \nI could've gone anywhere. \n \nOver here, under there. I could step sideways right now, I could. Well, I could. Couldn't I? Right now, I could do that right now. Couldn't I? Shall I? Shall I? Shall I do that right now? Shall I? What do you think? I could, but I'm not sure if I will. If that's the right thing to do. God will show me a sign. I'll wait till I see a sign. \n \n--KatieJane Garside - In the Kitchen" },
        { name: "Innocent Sin", text: "Worse than alone / Exiled. \n\nWorse than exiled / Dead. \n \nWorse than dead / Forgotten. \n \n--Persona 2 Innocent Sin - Maya" },
        { name: "I guess that I'm confused again", text: "Okay... Let's see. I guess that I'm confused again.\n\nAm I here, or am I there? I don't know... Over there, I'm everywhere, I know that...\n\nBut here is connected to over there, is that right? But then, where is the real me after all is said and done? \n\nOh, there is no real me, I guess that's it. \n\nI only exist inside those people aware of my existence. But what about this me that I can hear talking right here and now? \n\nIt's me, isn't it? This me that I hear talking... Who is it? Who's me? \n\n--Lain" },
        { name: "The world is whatever my heart desires", text: "The energy that flows from your heart has the ability to bring life to creations, and also destroy everything.\n\nIt is more virtuous than logic and emotions, more honest than the clouds in the sky, more stoic than a mountain's transmission tower, more lively than the tumbling raindrops forming into puddles, brighter than the headlights of passing cars, and more beautiful than the blinking of traffic lights.\n\nI believe in the existence of such a force... \n\n--Atopes - Sato Fumiya" },
        { name: "Exhausted", text: "My prayers always center on your face\n\nPaint away my soul to carry my feelings away\n\nI give birth to these wings to run away from love\n\nThe angel's price is paid, I burn atop a bizarre plate, burn to nothingness, burn away \n\n-- Drag-on-Dragoon" },
        { name: "Growing Wings", text: "I call out these prayers to the sky, heavy with thought, see your face\n\nI carry these memories inside, thoughts of a soul colored by love\n\nSee me grow wings and fly high, passions will die down below\n\nI burn in a basin of fire, watchers look on as they dance in their merciless sky\n\nWatching me, watching you...watching me... \n\n-- Drakengard" },
    ]
    
    return (
        <div className="border-1 border-pink-900 h-full items-center h-fit">
            <div className="flex border-b-2 border-pink-900 p-1 text-lg">
                {poems[id]?.name}
                <p className="ml-auto">X</p>
            </div>
            <div className="rotate-180"> ∟</div>
            <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto whitespace-pre-wrap">
                {poems[id]?.text}
            </span>
            <div> ∟</div>
        </div>
    )
}