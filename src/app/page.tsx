import Style from './Intro.module.css'
import { SFXButton } from '@/components/sfxbutton'

export default function IntroPage() {
    return (
    <div className='bg-black w-screen h-screen'>
        <div className={`${Style.fade} h-screen w-screen`}
            style={{
                backgroundImage: 'url(/lain/lainbgintro.gif)',
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