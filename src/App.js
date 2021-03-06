import React, {useState, useRef} from 'react';

// import components
import Song from "./components/song";
import Player from "./components/player";
import Library from "./components/library";
import Nav from "./components/nav";

// import styles
import "./styles/app.scss";

// import utils
import data from "./data";

function App() {
  // Ref
  const audioRef = useRef(null);
  // state
  const[songs, setSongs] = useState(data());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  const[songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
})
const[libraryStatus, setLibraryStatus] = useState(false);

const activeLibraryHandler = (nextPrev) => {
  const newSongs = songs.map((song) => {
    if (song.id === nextPrev.id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });
  setSongs(newSongs);
};

// function
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  // calculate percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration) * 100)
  setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation})
}

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);

  if (isPlaying) audioRef.current.play();
}

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs} />
      <Library
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus} />
        <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
