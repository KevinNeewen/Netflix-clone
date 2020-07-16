import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Media from '../Media'
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap'
import classNames from 'classnames'
import './mediaSlider.scss'

MediaSlider.propTypes = {
    splitMovies: PropTypes.arrayOf(PropTypes.array),
    setActiveMedia: PropTypes.func,
}

function MediaSlider({ splitMovies, setActiveMedia }) {
    const [activeSlide, setActiveSlide] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [onMovieHover, setOnMovieHover] = useState(false)

    const next = () => {
        if (animating) return
        const nextIndex =
            activeSlide === splitMovies.length - 1 ? 0 : activeSlide + 1
        setActiveSlide(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const previousIndex =
            activeSlide === 0 ? splitMovies.length - 1 : activeSlide - 1
        setActiveSlide(previousIndex)
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
                            setOnMovieHover={setOnMovieHover}
                            setActiveMedia={setActiveMedia}
                            {...movie}
                        />
                    )
                })}
            </CarouselItem>
        )
    })

    return (
        <div className="Media-slider">
            <Carousel
                interval={false}
                activeIndex={activeSlide}
                next={next}
                previous={previous}
            >
                <div className={classNames({ toHide: onMovieHover })}>
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                </div>
                {moviesForSlide}
                <div className={classNames({ toHide: onMovieHover })}>
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default MediaSlider
