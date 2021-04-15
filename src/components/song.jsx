import React from 'react';

// import components

// import scss

const Song = ({currentSong, isPlaying}) => {
    return(
        <div className="song-container">
            <img className={`${isPlaying ? "rotation" : ""}`} src={currentSong.cover} alt={currentSong.name} /> 
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
} 

export default Song;