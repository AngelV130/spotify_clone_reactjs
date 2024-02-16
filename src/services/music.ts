// Configura tu token de acceso aquí
const token = import.meta.env.VITE_API_KEY_SPOTIFY;

// Encabezados para la solicitud
const headers = {
  'Authorization': `Bearer ${token}`
};

// Realiza la solicitud usando fetch
const response = async (search:string) => {
    const searchUrl = search;
    try {
        const res = await fetch(searchUrl, { headers });
        if (!res.ok) {
            throw new Error('La solicitud no pudo ser completada.');
        }
        const data = await res.json();
        const tracks = data.tracks.items;
        return tracks.map((track: any) => ({
            name: track.name,
            artists: track.artists[0].name,
            album: track.album?.name || data.name || '',
            image: track.album?.images[0].url || data.images[0].url || '',
            id: track.id,
            id_album: ''
        }));
    } catch (error) {
        console.error('Error1:', error);
    }
}



export default response;
