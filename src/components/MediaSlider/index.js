import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Media from '../Media'
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap'
import classNames from 'classnames'
import './mediaSlider.scss'

MediaSlider.propTypes = {
    splitMovies: PropTypes.arrayOf(PropTypes.array),
    mediaType: PropTypes.string,
    activeMedia: PropTypes.number,
    setActiveMedia: PropTypes.func,
    onSliderLoaded: PropTypes.func,
}

function MediaSlider({
    splitMovies,
    mediaType,
    activeMedia,
    setActiveMedia,
    onSliderLoaded,
}) {
    const [activeSlide, setActiveSlide] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [onMovieHover, setOnMovieHover] = useState(false)

    const next = () => {
        if (animating) return
        const nextIndex =
            activeSlide === splitMovies.length - 1 ? 0 : activeSlide + 1
        setActiveSlide(nextIndex)
    }

    const moviesForSlide = splitMovies.map(slide => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={slide[0].id}
            >
                {slide.map((movie, index) => {
                    return (
                        <Media
                            index={index}
                            key={movie.id}
                            mediaType={mediaType}
                            activeMedia={activeMedia}
                            setOnMovieHover={setOnMovieHover}
                            setActiveMedia={setActiveMedia}
                            imageLoaded={onSliderLoaded}
                            {...movie}
                        />
                    )
                })}
            </CarouselItem>
        )
    })
    console.log(onMovieHover)
    return (
        <div className="media-slider">
            <Carousel interval={false} activeIndex={activeSlide} next={next}>
                {moviesForSlide}
                <CarouselControl
                    className={classNames({ toHide: onMovieHover })}
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    )
}

export default MediaSlider
