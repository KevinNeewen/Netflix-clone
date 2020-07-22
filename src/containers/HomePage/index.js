import React, { useState, useEffect } from 'react'
import CoverScreen from '../../components/CoverScreen'
import MediaShelf from '../../components/MediaShelf'
import MediaModal from '../../components/MediaModal'
import { requestApi } from '../../utils/restApis'
import {
    getAllHomePageApiRequests,
    addTitleAndMapGenreToAllMedia,
    setPosterSizeForMediaRow,
} from './homePageService'
import { TOP_RATED_MOVIES, MOVIE_TYPE } from '../constants'
import './homePage.scss'

function HomePage() {
    const [state, setState] = useState({})
    useEffect(() => {
        Promise.all([
            requestApi.getMovieGenres(),
            ...getAllHomePageApiRequests(),
        ]).then(response => {
            var genreResponse = response.shift()
            var medias = addTitleAndMapGenreToAllMedia(
                genreResponse.genres,
                response
            )

            medias = setPosterSizeForMediaRow(medias, TOP_RATED_MOVIES)
            setState({
                mediasForShelf: medias,
            })
        })
    }, [])

    const [activeMedia, setActiveMedia] = useState({})
    useEffect(() => {
        if (!!activeMedia.id && activeMedia.mediaType) {
            setIsLoading(true)
            requestApi
                .getMediaDetails(activeMedia.id, activeMedia.mediaType)
                .then(response => {
                    setActiveMedia({
                        id: activeMedia.id,
                        detail: response,
                    })
                    setIsLoading(false)
                })
        }
    }, [activeMedia.id])

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="home-page">
            {activeMedia.id && !isLoading && (
                <MediaModal
                    isOpen={!!activeMedia.id}
                    closeModal={() => setActiveMedia({})}
                    mediaDetails={activeMedia.detail}
                />
            )}
            <CoverScreen />
            {state.mediasForShelf && (
                <MediaShelf
                    activeMedia={activeMedia.id}
                    mediaRows={state.mediasForShelf}
                    setActiveMedia={setActiveMedia}
                />
            )}
        </div>
    )
}

export default HomePage
