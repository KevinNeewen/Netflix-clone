import React from 'react'
import PropType from 'prop-types'
import './media.scss'

Media.propType = {
    id: PropType.number,
    title: PropType.String,
    backdrop_path: PropType.String,
    overview: PropType.String,
    release_date: PropType.String,
}

function Media({ id, title, backdrop_path, overview, release_date }) {
    const buildImageUrl = path => {
        return `https://image.tmdb.org/t/p/w300//${path}`
    }

    return (
        <div className="Media">
            <img src={buildImageUrl(backdrop_path)} />
        </div>
    )
}

export default Media
