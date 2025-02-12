import Log from "@/components/log";

export default function test(){
    
    return(        
        <div className="bg-black h-screen w-full">            
            <section className="grid gap-5 w-full p-20 pl-5 pt-10  h-fit">
                <div className="border-2 border-pink-900 h-full items-center h-fit bg-black ">

                <div className="border-1 border-pink-900 items-center h-fit">
                    <div className="flex border-b-2 border-pink-900 p-1 text-lg text-white">
                        log test
                        <p className="ml-auto">X</p>
                    </div>
                    <div className="rotate-180"> ∟</div>
                    <span className="flex flex-col p-5 gap-3 text-sm xl:text-[15px] pt-auto whitespace-pre-wrap">
                    <Log/>
                    </span>
                    <div> ∟</div>
                </div>
                    
                </div>
            </section>      
        </div>
    )    
}