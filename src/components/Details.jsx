import React from 'react'

function Details({
    films,
    displayedFilm,
    selectedFavorite,
    handleSelectFavorite
}) {

    const filmToRender = films.filter(film => film._id === displayedFilm); // filtering the movies by id

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
                            className={selectedFavorite === film._id
                                ? "details-comp_content_favorite" 
                                : "details-comp_content"
                            }
                            key={film._id}>
                            {selectedFavorite === film._id
                                ? `This is my favorite!!!`
                                : ""
                            }
                            {selectedFavorite !== film._id
                                ? <div className="btn" onClick={() => handleSelectFavorite(film._id)}>
                                    Select this movie as your favorite </div>
                                : ""
                            }
                            <div className="details-comp_content_title">{film.properties.title}</div>
                            <div className="details-comp_content_abstract">{film.properties.opening_crawl}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Details
