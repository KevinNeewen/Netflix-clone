import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import MediaCardRow from './mediaCardRow'
import './mediaCardGrid.scss'

const MediaCardGrid = ({ medias }) => {
    MediaCardGrid.propTypes = {
        title: PropTypes.string,
        medias: PropTypes.array,
    }

    let upToNineMedias = medias.slice(0, 9)
    console.log(upToNineMedias)
    return (
        <div className="media-card-grid">
            {chunk(upToNineMedias, 3).map((mediaCardRow, index) => (
                <MediaCardRow key={index} mediaCards={mediaCardRow} />
            ))}
        </div>
    )
}

export default MediaCardGrid
