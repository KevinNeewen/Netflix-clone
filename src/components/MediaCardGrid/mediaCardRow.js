import React from 'react'
import PropTypes from 'prop-types'
import MediaCard from './mediaCard'

const MediaCardRow = ({ mediaCards, imagesLoad }) => {
    MediaCardRow.propTypes = {
        mediaCards: PropTypes.array,
        imagesLoad: PropTypes.func,
    }

    return (
        <div className="media-card-row">
            {mediaCards &&
                mediaCards.map((media, index) => (
                    <MediaCard
                        key={`${index}${media.id}`}
                        details={media}
                        imageLoad={imagesLoad}
                    />
                ))}
        </div>
    )
}

export default MediaCardRow
