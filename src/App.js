import './App.css';
import React, { useEffect, useState } from 'react';
import Toc from './components/Toc';
import Details from './components/Details';
import axios from 'axios';


function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);


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

  return (
    <div className="app-comp">
      <Toc
        films={films}
        handleSelect={handleSelect}
      />

      <Details
        films={films}
        selectedFilm={selectedFilm}
      />
    </div>
  );
}

export default App;
