import './App.css';
import React, { useEffect, useState } from 'react';
import Toc from './components/Toc';
import Details from './components/Details';
import axios from 'axios';
import useLocalStorage from './utils/localStorageHook';
import logo from './img/swlogo.com.png'




function App() {
  const [films, setFilms] = useState([]);//films data
  const [selectedFavorite, setSelectedFavorite] = useLocalStorage("selectedFavorite", []);// Local Storage hook
  const [displayedFilm, setDisplayedFilm] = useState(selectedFavorite);//state of the selected films


  useEffect(() => {
    axios.get('https://www.swapi.tech/api/films/')
      .then(res => {
        setFilms(res.data.result)
      }).catch(err => console.error(err, "Error, couldn't fetch the data from the API"))
  }, []); // fetching the data from the SWAPI

  const handleSelect = (id) => {
    setDisplayedFilm(id)
  }

  const handleSelectFavorite = (id) => {
    setSelectedFavorite(id)
  }

  return (
    <div className="stars">
      <div className="logo">
        <img
          src={logo} alt="star wars logo"
        />
      </div>

      <div className="app-comp">
        <Toc
          films={films}
          handleSelect={handleSelect}
        />

        <Details
          films={films}
          displayedFilm={displayedFilm}
          selectedFavorite={selectedFavorite}
          handleSelectFavorite={handleSelectFavorite}
        />
      </div>
    </div>
  );
}

export default App;
