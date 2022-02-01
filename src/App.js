import React, { useRef, useState } from "react"
import "./App.css"
import Header from "./Header";
import Results from "./Results";
import SearchBar from "./SearchBar"
import Playlist from "./Playlist";
import Confirm from "./Confirm";

const App = () => {
  const [movie, setMovie] = useState({});
  const inputRef = useRef();
  const throttle = useRef(false);
  const [playlistMovies, setPlaylistMovies] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const onSearchSubmit = async => {
    if (throttle.current) {
      return;
    }
    if (!inputRef.current.value.trim()) {
      setMovie({});
      return;
    }
    throttle.current = true;
    setTimeout(() => {
      throttle.current = false;
      fetch(`https://www.omdbapi.com/?apikey=8abcbc5&t=${inputRef.current.value}`)
        .then(async response => {
          if (!response.ok) {
            console.log('error');
          } else {
            const data = await response.json();
            setMovie(data);
          }
        })
        .catch(err => {
          console.error(err);
        })
      }, 600)
  }

  const saveMovieToPlaylist = (movie) => {
    let playlistCopy = playlistMovies.slice();
    playlistCopy.push(movie);
    setPlaylistMovies(playlistCopy);
    setDisplayModal(false);
  }

  const onDecline = () => {
    setDisplayModal(false);
  }

  return (
    <React.Fragment>
      {displayModal && (
        <Confirm onConfirm={() => saveMovieToPlaylist(movie)} onDecline={onDecline} />
      )}
      <div className="Container">
        <Header />
        <div className="flex-container">
          <div className="left-container">
            <SearchBar 
              onSearchSubmit={onSearchSubmit} 
              inputRef={inputRef} />
            <Results movie={movie} onClick={() => setDisplayModal(true)}/>
          </div>
          <div className="right-container">
            <Playlist movies={playlistMovies} />
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}

export default App

// #ffb8c6
// Inter font
// Box shadows 0 0 50px 5px rgb(0 0 0 / 25%)
// Form search input
// List render for movies
// Playlist of movies
// Save functionality 