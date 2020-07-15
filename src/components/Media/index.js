import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './media.scss'

Media.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.number,
    setOnMovieHover: PropTypes.func,
    setActiveMovieId: PropTypes.func,
}

function Media({
    id,
    index,
    title,
    name,
    backdrop_path,
    genres,
    vote_average,
    setOnMovieHover,
    setActiveMovieId
}) {
    const buildImageUrl = path => {
        return path === null
            ? '/images/fallbackImage.jpg'
            : `https://image.tmdb.org/t/p/w500//${path}`
    }

    const filterStartAndEndHovers = () => {
        if (index !== 6) {
            setOnMovieHover(true)
        }
    }

    return (
        <div
            className="Media"
            onMouseEnter={() => filterStartAndEndHovers()}
            onMouseLeave={() => setOnMovieHover(false)}
            onClick={() => setActiveMovieId(id)}
        >
            <div className="Media-pop-up-content">
                <FontAwesomeIcon icon={['far', 'play-circle']} size="2x" />
                <h4>{title || name}</h4>
                <p>Rating: {vote_average}</p>
                <p></p>
                {genres && (
                    <ul>
                        {genres.map(genre => {
                            return <li key={genre}>{genre}</li>
                        })}
                    </ul>
                )}
                <FontAwesomeIcon icon="angle-down" size="2x" />
            </div>
            <img alt="Media" src={buildImageUrl(backdrop_path)} />
        </div>
    )
}

export default Media
