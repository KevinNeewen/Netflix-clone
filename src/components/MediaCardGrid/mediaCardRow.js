import React from 'react'
import PropTypes from 'prop-types'
import MediaCard from './mediaCard'

const MediaCardRow = ({ mediaCards }) => {
    MediaCardRow.propTypes = {
        mediaCards: PropTypes.array,
    }

    return (
        <div className="media-card-row">
            {mediaCards &&
                mediaCards.map((media, index) => (
                    <MediaCard key={`${index}${media.id}`} details={media} />
                ))}
        </div>
    )
}

export default MediaCardRow
