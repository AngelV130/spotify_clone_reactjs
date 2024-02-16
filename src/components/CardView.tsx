import imgExample from '../img/imgS1.jpg';

interface CardViewProps
{
    srcImg: string;
    title: string;
    music: string;
    artist: string;
    album: string;
    uri: string;
    setUri: (uri:string) => void;
    size: string;
    id_album: string;
    play?: boolean;
}

export default function CardView({srcImg, title, music, artist, album, uri, setUri, size, play = true, id_album}:CardViewProps)
{
//
    return(
        <>
            <article 
            className={`${size} p-2 border border-black rounded-lg bg-zinc-950 hover:bg-opacity-60 hover:cursor-pointer`}
            onClick={()=>{
                const type = artist ? 'track' : 'album';
                const search = artist ? `search?q=${encodeURIComponent(artist)}&type=${type}` 
                :
                `albums/${id_album}`;
                !play && setUri(
                    `https://api.spotify.com/v1/${search}`
                    );
            }}>
                <img src={srcImg} alt="imagenSong" height="50%" width="100%" className={`${play ? 'rounded-md' : 'rounded-full'}`}/>
                <div className="relative">
                    <div className='text-white max-w-[70%]'>
                        {

                            title && <p
                            title={title}
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
                            className='mt-2 hover:border-b'>{title}</p>
                        }
                        { 
                            artist && <p
                            title={artist}
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} 
                            className='text-sm mt-2 hover:border-b'>{artist}</p>
                        }
                        {
                            album && <p
                            title={album}
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} 
                            className='mt-2 hover:border-b'>{album}</p>
                        }
                    </div>
                    {
                        play && <button className='absolute bottom-0 right-0 text-green-600 '
                        onClick={()=>setUri(uri)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="w-14 h-14">
                            <path fillRule="evenodd" 
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 
                            9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 
                            1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" 
                            clipRule="evenodd" />
                        </svg>
                        </button>
                    }
                </div>
            </article>
        </>
    )
}