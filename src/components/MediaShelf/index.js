import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import MediaRow from '../MediaRow'
import './mediaShelf.scss'

MediaShelf.propTypes = {
    mediaRows: PropTypes.arrayOf(PropTypes.any),
    activeMedia: PropTypes.number,
    setActiveMedia: PropTypes.func,
    mediaCountToLoad: PropTypes.number,
    setIsLoading: PropTypes.func,
}

function MediaShelf({
    mediaRows,
    mediaCountToLoad,
    activeMedia,
    setActiveMedia,
    setIsLoading,
}) {
    const loadedImages = useRef(0)
    const onMediasLoaded = () => {
        if (++loadedImages.current >= mediaCountToLoad) {
            setIsLoading(false)
        }
    }

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
                            onRowLoaded={onMediasLoaded}
                        />
                    )
                })}
        </section>
    )
}

export default MediaShelf
