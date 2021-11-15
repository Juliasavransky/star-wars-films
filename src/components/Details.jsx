import React from 'react'

function Details({
    films,
    selectedFilm
}) {
    const filmToRender = films.filter(film => film._id === selectedFilm);
    console.log(selectedFilm);
    return (
        <div>
            From Details
          {filmToRender.map(film => (
              <div key={film._id}>
                  <h4 >{film.properties.title}</h4>
                  <div>{film.properties.opening_crawl}</div>
              </div>

            ))}
        </div>
    )
}

export default Details
