import React from 'react'


function Toc({
    films,
    handleSelect
}) {
    return (
        <div
            className="toc-comp"
        >
     

            {films.map(film => (
                <div
                    className="toc-comp_card"
                    onClick={() => handleSelect(film._id)}
                    key={film._id}>
                        {film.properties.title}
                </div>
            ))}
        </div>
    )
}

export default Toc
