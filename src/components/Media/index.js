import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { buildImageUrl } from '../../utils/imageBuilder'
import './media.scss'

Media.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.number,
    mediaType: PropTypes.string,
    setOnMovieHover: PropTypes.func,
    setActiveMovie: PropTypes.func,
    imageLoaded: PropTypes.func,
}

function Media({
    id,
    index,
    title,
    name,
    backdrop_path,
    genres,
    vote_average,
    mediaType,
    setOnMovieHover,
    setActiveMedia,
    imageLoaded,
}) {
    const delayMouseHover = bool => {
        setTimeout(() => setOnMovieHover(bool), 300)
    }

    return (
        <div
            className="media"
            onMouseEnter={() => delayMouseHover(true)}
            onMouseLeave={() => delayMouseHover(false)}
            onClick={() => setActiveMedia({ id, mediaType })}
        >
            <div className="media-pop-up-content">
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
            <img
                alt="Media"
                onLoad={imageLoaded}
                src={buildImageUrl(backdrop_path, 'w500')}
            />
        </div>
    )
}

export default Media
