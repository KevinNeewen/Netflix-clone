import React from 'react'
import PropTypes from 'prop-types'
import MediaRow from '../MediaRow'
import './mediaShelf.scss'

MediaShelf.propTypes = {
    mediaRows: PropTypes.arrayOf(PropTypes.any),
    activeMedia: PropTypes.number,
    setActiveMedia: PropTypes.func,
}

function MediaShelf({ mediaRows, activeMedia, setActiveMedia }) {
    return (
        <section className="media-shelf">
            {mediaRows &&
                mediaRows.map(mediaRow => {
                    return (
                        <MediaRow
                            key={mediaRow.categoryTitle}
                            title={mediaRow.categoryTitle}
                            activeMedia={activeMedia}
                            medias={mediaRow.mediasPerCategory}
                            isPoster={mediaRow.isPoster}
                            mediaType={mediaRow.mediaType}
                            setActiveMedia={setActiveMedia}
                        />
                    )
                })}
        </section>
    )
}

export default MediaShelf
