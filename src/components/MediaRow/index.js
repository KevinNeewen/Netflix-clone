import React from 'react'
import PropTypes from 'prop-types'
import Media from '../Media'
import './mediaRow.scss'

MediaRow.propTypes = {
    myListMovies: PropTypes.arrayOf(PropTypes.object),
}

function MediaRow({ myListMovies }) {
    return (
        <div className="Media-row-with-title">
            <h2>My List</h2>
            <span className="Media-row">
                {myListMovies &&
                    myListMovies.map(movie => (
                        <Media
                            key={movie.id}
                            title={movie.title}
                            backdrop_path={movie.backdrop_path}
                            overview={movie.overview}
                            release_date={movie.release_date}
                        />
                    ))}
            </span>
        </div>
    )
}

export default MediaRow
