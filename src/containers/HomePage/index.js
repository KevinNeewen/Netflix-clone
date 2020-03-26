import React, { useState, useEffect } from 'react'
import CoverScreen from '../../components/CoverScreen'
import { fetch } from 'whatwg-fetch'
import './homePage.scss'

function HomePage() {
    const [state, setState] = useState({})

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=5d1e37a1c98f8c9c92ada6ae97c30854&language=en-US&page=1'
        )
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                console.log(json)
                setState(json)
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }, [])

    return (
        <div className="Home-page">
            {state.results && <CoverScreen myListMovies={state.results} />}
            <div className="blackness"></div>
        </div>
    )
}

export default HomePage
