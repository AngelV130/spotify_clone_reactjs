import CardView from '@/components/CardView'
import Duki from '@/img/Duki.jpeg'
import BadBunny from '@/img/BadBunny.jpeg'
import LeftySM from '@/img/LeftySM.jpeg'

interface PropsRecientes{
    hiddenElements: number;
    setArtist: (artist:string)=>void;
}

export default function RecientesArtistas({hiddenElements, setArtist}:PropsRecientes)
{
    return(
        <>
              <div className="grow overflow-y-auto p-1">
                <div className={`grid ${hiddenElements > 250 ? "grid-cols-2" : "grid-cols-1"} gap-3 place-items-center`}>
                
                <CardView
                id_album=''
                srcImg={BadBunny}
                title=""
                music=""
                artist="Bad Bunny"
                album=""
                uri=""
                setUri={setArtist}
                size="h-38 w-28"
                play={false}
                />
                <CardView
                // id_album='26nUVuonXEdbJTo9PeBYoR'
                id_album=''
                srcImg={Duki}
                title=""
                music=""
                artist="Duki"
                album=""
                uri=""
                setUri={setArtist}
                size="h-34 w-28"
                play={false}
                />
                <CardView
                id_album=''
                srcImg={LeftySM}
                title=""
                music=""
                artist="LeftySm"
                album=""
                uri=""
                setUri={setArtist}
                size="h-34 w-28"
                play={false}
                />
                </div>
              </div>
        </>
    )
}