import { useCallback, useEffect, useState } from "react"
import NavBar from "@/components/NavBar"
import Container from "@/components/Container"
import Player from "@/components/PlayerSong"
import GetMusicPlaylists from '@/services/music';


function App() {
  const [track, setTrack] = useState<string>("6bTVP50bbtMtD6RGe2cUoQ")
  const [artist, setArtist] = useState<string>(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent('duki')}&type=track`
  )
  const [data, setData] = useState<Array<any>>([]);
  const setUri = (track:string) => setTrack(track)

  const fetchData = useCallback(async ()=>{
      try {
          const result = await GetMusicPlaylists(artist);
          setData(result);
      } catch (error) {
          console.error('Error:', error);
      }
    },[artist])


  useEffect(()=>{
    fetchData()
  },[artist])

  return (
    <>
       <div id="app" className="relative h-screen p-2 gap-1">
          <NavBar setArtist={setArtist} />
        <main className="[grid-area:main] grow overflow-auto border border-gray-600 rounded-lg 
        p-2 bg-[#222222]">
          <Container data={data} setUri={setUri}/>
        </main>
        <footer className="[grid-area:player] bg-[#222222] h-[5.1rem] rounded-lg">
          <Player track={track}/>
        </footer>
       </div>
    </>
  )
}

export default App
