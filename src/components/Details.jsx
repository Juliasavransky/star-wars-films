import React from 'react'

function Details({
    films,
    selectedFilm,
    selectedFavorite,
    handleSelectFavorite
}) {
    const filmToRender = films.filter(film => film._id === selectedFilm);
    console.log(selectedFilm);
    return (
        <div className="details-comp">
            <div className="details-comp_heading">
                {
                    filmToRender.length === 0
                        ? "To learn more, please click on the movie title"
                        : ""
                }

            </div>


            {
                <div
                    className="details-comp_content"
                >
                    {filmToRender.map(film => (
                        <div
                            key={film._id}>
                           
                            <h4 >{film.properties.title}</h4>
                            <div>{film.properties.opening_crawl}</div>
                        </div>
                    ))}

                </div>
            }
        </div>
    )
}

export default Details
