

interface PropsPlayer {
    track: string;
}

const Player = ({track}:PropsPlayer) => {
    const spotifyPlayerUrl = `https://open.spotify.com/embed/track/${track}?autoplay=true`;
    return (
        <iframe className="overflow-hidden" src={spotifyPlayerUrl} frameBorder="0" width='100%' height='100%' allow="encrypted-media"
            loading="lazy"></iframe>
    );
}

export default Player;