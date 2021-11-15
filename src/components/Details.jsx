import React from 'react'

function Details({
    films
}) {
    return (
        <div>
            From Details
          {films.map(film => (
              <div key={film._id}>
                  <h4 >{film.properties.title}</h4>
                  <div>{film.properties.opening_crawl}</div>
              </div>

            ))}
        </div>
    )
}

export default Details
