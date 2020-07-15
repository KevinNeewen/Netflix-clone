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

    const [activeMovieId, setActiveMovieId] = useState(0)
    useEffect(() => {
        console.log('YO' + activeMovieId)
    })

    return (
        <div className="Home-page">
            {!!activeMovieId && (
                <MediaModal
                    isOpen={activeMovieId !== 0}
                    closeModal={() => setActiveMovieId(0)}
                />
            )}
            <CoverScreen />
            {state.mediasForShelf && (
                <MediaShelf
                    mediaRows={state.mediasForShelf}
                    setActiveMovieId={setActiveMovieId}
                />
            )}
        </div>
    )
}

export default HomePage
