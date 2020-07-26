import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import MediaCardRow from './mediaCardRow'
import './mediaCardGrid.scss'

const MediaCardGrid = ({ medias, imagesLoad }) => {
    MediaCardGrid.propTypes = {
        title: PropTypes.string,
        medias: PropTypes.array,
        imagesLoad: PropTypes.func,
    }

    let upToNineMedias = medias.slice(0, 9)
    return (
        <div className="media-card-grid">
            {chunk(upToNineMedias, 3).map((mediaCardRow, index) => (
                <MediaCardRow
                    key={index}
                    mediaCards={mediaCardRow}
                    imagesLoad={imagesLoad}
                />
            ))}
        </div>
    )
}

export default MediaCardGrid
