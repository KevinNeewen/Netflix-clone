import React from 'react'
import TitleInfoContainer from '../TitleInfoContainer'
import MediaRow from '../MediaRow'
import PropTypes from 'prop-types'
import './coverScreen.scss'

CoverScreen.propTypes = {
    myListMovies: PropTypes.array,
}

function CoverScreen(props) {
    return (
        <div className="Cover-screen">
            <TitleInfoContainer />
            <MediaRow myListMovies={props.myListMovies} />
        </div>
    )
}

export default CoverScreen
