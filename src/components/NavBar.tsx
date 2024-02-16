import { useState } from "react"
import Navegacion from "../components/Navegacion"
import Recientes from "./RecientesArtistas"
import Resize from "../components/Resize"
import Etiqueta from '../components/Etiqueta'
export default function NavBar({setArtist}:{setArtist:(artist:string)=>void}){
    
    const [witdhResize, setWitdhResize] = useState(280)
    const setAncho = (width:number)=>{setWitdhResize(width)}
    return(
        <>
            <Resize position={"right"} className="[grid-area:aside]" maxWidth={280} minWidth={150} onResize={setAncho}>
                <div className="p-2 flex flex-col h-full">
                    <Navegacion />

                <section className="flex flex-col mt-5 h-full">
                    <div>
                        <p className="text-sm cursor-pointer hover:border-b inline-block">Your Library</p>
                    </div>
                    {/* <div className={`${witdhResize > 190 ? "visible":"hidden"}`}> */}
                    <div>
                        <ul className="flex flex-row m-2 ml-0" >
                            {/* <Etiqueta title="PlayLists" /> */}
                            {/* <Etiqueta title="Albumes" /> */}
                            <Etiqueta title="Artistas" active={true} />
                        </ul>
                    </div>
                    <Recientes setArtist={setArtist} hiddenElements={witdhResize}/>
                </section>
                </div>
            </Resize>
        </>
    )
}