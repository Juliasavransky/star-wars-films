import './App.css';
import React, { useEffect, useState } from 'react';
import Toc from './components/Toc';
import Details from './components/Details';
import axios from 'axios';


function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://www.swapi.tech/api/films/')
      .then(res => {
        setFilms(res.data.result)
        console.log("all the data", res.data.result)
      }).catch(err => console.error(err, "Error!!!"))
  }, []);

  return (
    <div className="app-comp">
      <Toc
        films={films}
      />

      <Details
        films={films}
      />
    </div>
  );
}

export default App;
