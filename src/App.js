import './App.css';
import React, { useEffect, useState } from 'react';
import Toc from './components/Toc';
import Details from './components/Details';
import axios from 'axios';
import useLocalStorage from './utils/localStorageHook';



function App() {
  const [films, setFilms] = useState([]);
  const [selectedFavorite, setSelectedFavorite] = useLocalStorage("selectedFavorite", []);
  const [selectedFilm, setSelectedFilm] = useState(selectedFavorite);  


  useEffect(() => {
    axios.get('https://www.swapi.tech/api/films/')
      .then(res => {
        setFilms(res.data.result)
        console.log("all the data", res.data.result)
      }).catch(err => console.error(err, "Error!!!"))
  }, []);

  const handleSelect = (id) => {
    setSelectedFilm(id)
    console.log(selectedFilm)
  }
  const handleSelectFavorite = (id) => {
    setSelectedFavorite(id)
    console.log("setSelectedFavorite",id)
  }

  return (
    <div className="app-comp">
      <Toc
        films={films}
        handleSelect={handleSelect}
      />

      <Details
        films={films}
        selectedFilm={selectedFilm}
        handleSelectFavorite={handleSelectFavorite}
        selectedFavorite={selectedFavorite}
      />
    </div>
  );
}

export default App;
