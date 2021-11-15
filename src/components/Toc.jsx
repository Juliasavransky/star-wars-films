import React from 'react'

function Toc({
    films
}) {
    return (
        <div>
            From Toc
            {films.map(film => (
                <li key={film._id} >{film.properties.title}</li>

            ))}
        </div>
    )
}

export default Toc
