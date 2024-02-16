import { useEffect, useState } from "react";
import CardView from "../components/CardView"

export default function Container({setUri,data}:{setUri:(uri:string)=>void,data:Array<any>}){
    useEffect(() => {
    }, []);
    return(
        <>
            <section className="grid gap-5 2xl:grid-cols-6 xl:grid-cols-5 
            lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center">
            {
                data.map((v)=>
                    <CardView
                        id_album={v.id_album}
                        size="h-72 w-48"
                        key={v.id}
                        album={v.album}
                        artist={v.artists}
                        music={v.name}
                        srcImg={v.image}
                        title={v.name}
                        uri={v.id}
                        setUri={setUri}
                    />,
                )
            }
            </section>
        </>
    )
}