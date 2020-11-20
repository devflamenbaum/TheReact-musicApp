import React from 'react'

const LibrarySong = ({ songs, song, setCurrentSong, id, audioRef, isPlaying, setSongs, setIsPlaying }) => {
    const songSelectorHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id)
        await setCurrentSong(selectedSong[0]);
        // Add Active State
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true
                }
            } else{
                return{
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs)
        // Check if the song is Playing
        if(isPlaying){
            audioRef.current.play();
            return;
        }
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    };
    return(
        <div onClick={songSelectorHandler} className={`library-song ${ song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;