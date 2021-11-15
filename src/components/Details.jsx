import React from 'react'

function Details({
    films
}) {
    return (
        <div>
            From Details
          {films.map(film => (
                <div key={film._id} >{film.properties.title}</div>

            ))}
        </div>
    )
}

export default Details
