import { getRandomInt } from '@/lib/utils';
import Style from './Intro.module.css'
import { SFXButton } from '@/components/sfxbutton'

export default function IntroPage() {
    const bgGif = [
        {value: "url(/lain/insomnia.gif)" },
        {value: "url(/lain/lainbgintro.gif)" },
        {value: "url(/lain/lainside.gif)" },
    ]    
    const bg : string = bgGif[getRandomInt(0,2)].value;

    return (
    <div className='bg-black w-screen h-screen '>        
        <div className={`${Style.fade} h-screen w-screen text-justify`}
            style={{
                backgroundImage: bg,
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '70%',
            }}        
        >          
            <SFXButton/>
        </div>
    </div>
    )
}