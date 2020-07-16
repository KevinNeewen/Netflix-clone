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
import { TOP_RATED_MOVIES } from '../constants'
import './homePage.scss'
import { act } from '@testing-library/react'

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
            console.log(medias)
            setState({
                mediasForShelf: medias,
            })
        })
    }, [])

    const [activeMedia, setActiveMedia] = useState({})
    useEffect(() => {
        if (!!activeMedia.id) {
            setIsLoading(true)
            requestApi.getMovieDetails(activeMedia.id).then(response => {
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
        <div className="Home-page">
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
                    mediaRows={state.mediasForShelf}
                    setActiveMedia={setActiveMedia}
                />
            )}
        </div>
    )
}

export default HomePage
