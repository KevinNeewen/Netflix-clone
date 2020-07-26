import React, { useState, useEffect, useRef } from 'react'
import CoverScreen from '../../components/CoverScreen'
import MediaShelf from '../../components/MediaShelf'
import MediaModal from '../../components/MediaModal'
import { requestApi } from '../../utils/restApis'
import {
    getAllHomePageApiRequests,
    addTitleAndMapGenreToAllMedia,
    setPosterSizeForMediaRow,
} from './homePageService'
import { TOP_RATED_MOVIES } from '../constants'
import './homePage.scss'

function HomePage({ setIsPageLoading }) {
    const [state, setState] = useState({})
    useEffect(() => {
        setIsPageLoading(true)
        Promise.all([
            requestApi.getMovieGenres(),
            ...getAllHomePageApiRequests(),
        ]).then(response => {
            var genreResponse = response.shift()
            var medias = addTitleAndMapGenreToAllMedia(
                genreResponse.genres,
                response
            )
            var totalMediaCount = medias.reduce(
                (count, toAdd) => count + toAdd.mediasPerCategory.length,
                0
            )
            medias = setPosterSizeForMediaRow(medias, TOP_RATED_MOVIES)
            setState({
                mediasForShelf: medias,
                totalMediaCount,
            })
        })
    }, [])

    const [isModalLoading, setIsModalLoading] = useState(false)

    const [activeMedia, setActiveMedia] = useState({})
    useEffect(() => {
        if (!!activeMedia.id && activeMedia.mediaType) {
            setIsModalLoading(true)
            requestApi
                .getMediaDetails(activeMedia.id, activeMedia.mediaType)
                .then(response => {
                    setActiveMedia({
                        id: activeMedia.id,
                        detail: response,
                    })
                })
        }
    }, [activeMedia.id])

    return (
        <div className="home-page">
            {activeMedia.id && (
                <MediaModal
                    isOpen={!!activeMedia.id}
                    closeModal={() => setActiveMedia({})}
                    mediaDetails={activeMedia.detail}
                    setIsModalLoading={setIsModalLoading}
                    isModalLoading={isModalLoading}
                />
            )}
            <CoverScreen />
            {state.mediasForShelf && (
                <MediaShelf
                    activeMedia={activeMedia.id}
                    mediaRows={state.mediasForShelf}
                    setActiveMedia={setActiveMedia}
                    mediaCountToLoad={state.totalMediaCount}
                    setIsLoading={setIsPageLoading}
                />
            )}
        </div>
    )
}

export default HomePage
