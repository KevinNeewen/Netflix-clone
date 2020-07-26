import React from 'react'
import PropTypes from 'prop-types'
import MediaSlider from '../MediaSlider'
import './mediaRow.scss'

MediaRow.propTypes = {
    title: PropTypes.string,
    medias: PropTypes.arrayOf(PropTypes.object),
    mediaType: PropTypes.string,
    activeMedia: PropTypes.number,
    setActiveMedia: PropTypes.func,
    isRowLoaded: PropTypes.func,
}

function MediaRow({
    title,
    medias,
    mediaType,
    activeMedia,
    setActiveMedia,
    onRowLoaded,
}) {
    const splitMediasForSlide = () => {
        const slide = []

        let from = 0
        let to = 0
        while (from < 20) {
            const mediasOnSlide = []
            to = to + 5
            mediasOnSlide.push(...medias.slice(from, to))

            if (to === medias.length) {
                mediasOnSlide.push(medias[0])
            } else {
                mediasOnSlide.push(medias[to])
            }
            slide.push(mediasOnSlide)
            from = to
        }
        return slide
    }

    return (
        <div className="media-row">
            <h3>{title}</h3>
            <MediaSlider
                splitMovies={splitMediasForSlide()}
                mediaType={mediaType}
                activeMedia={activeMedia}
                setActiveMedia={setActiveMedia}
                onSliderLoaded={onRowLoaded}
            />
        </div>
    )
}

export default MediaRow
