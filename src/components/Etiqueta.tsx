import '@/styles/styes.css';

interface EtiquetaProps {
    title: string
    active: boolean;
}

export default function Navegacion({title, active}:EtiquetaProps)
{
    return(
        <>
            <li 
            className={`
            text-xs flex justify-center border border-black rounded-md bg-zinc-900 hover:bg-zinc-600 
            hover:cursor-pointer text-white h-[28px] p-1 mr-2 ${active && 'active'}
            `}>
                {title}
            </li>
        </>
    )
}