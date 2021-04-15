import React, {useEffect} from 'react';

// import fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons";

// import components

// import scss

const Player = ({songs, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, setCurrentSong, setSongs}) => {
    // use effect
    useEffect(() => {
        // add active state
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs);
    }, [currentSong])

    // Events
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(song1 => song1.id === currentSong.id);
        console.log(currentIndex);

        if(direction === 'skip-forward') {
            await setCurrentSong(songs[currentIndex + 1]);
            /*if(song1.id === songs.length - 1) {
                await setCurrentSong(songs[0]);
            }*/
            if(isPlaying) audioRef.current.play();
            
        } if(direction === 'skip-back') {
            await setCurrentSong(songs[currentIndex - 1]);
            /*if(song1.id === 0) {
                await setCurrentSong(songs[songs.length - 1]);
            }*/
            
            if(isPlaying) audioRef.current.play();
            
        }
        
    }
    // Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" 
                />
                <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft}
                    onClick={() => skipTrackHandler('skip-back')}  />
                <FontAwesomeIcon 
                    onClick={playSongHandler} 
                    className="play" 
                    size="2x" 
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon 
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight}
                    onClick={() => skipTrackHandler('skip-forward')}  />
            </div>
            
        </div>
    )
} 

export default Player;