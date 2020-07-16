import React from 'react'
import PropTypes from 'prop-types'
import MediaSlider from '../MediaSlider'
import './mediaRow.scss'

MediaRow.propTypes = {
    title: PropTypes.string,
    medias: PropTypes.arrayOf(PropTypes.object),
    setActiveMedia: PropTypes.func,
}

function MediaRow({ title, medias, setActiveMedia }) {
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
        <div className="Media-row">
            <h3>{title}</h3>
            <MediaSlider
                splitMovies={splitMediasForSlide()}
                setActiveMedia={setActiveMedia}
            />
        </div>
    )
}

export default MediaRow
