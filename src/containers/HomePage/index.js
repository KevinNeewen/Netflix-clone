import React, { useState, useEffect } from 'react'
import CoverScreen from '../../components/CoverScreen'
import MediaShelf from '../../components/MediaShelf'
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
                mediasForCoverScreen: medias.shift(),
                mediasForShelf: medias,
            })
        })
    }, [])

    return (
        <div className="Home-page">
            {state.mediasForCoverScreen && (
                <CoverScreen mediaRow={state.mediasForCoverScreen} />
            )}
            {state.mediasForShelf && (
                <MediaShelf mediaRows={state.mediasForShelf} />
            )}
        </div>
    )
}

export default HomePage
