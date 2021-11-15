import React from 'react'

function Toc({
    films,
    handleSelect
}) {
    return (
        <div>
            From Toc
            {films.map(film => (
                <li onClick={() => handleSelect(film._id)} key={film._id} >{film.properties.title}</li>

            ))}
        </div>
    )
}

export default Toc
