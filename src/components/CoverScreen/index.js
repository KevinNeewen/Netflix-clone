import React from 'react'
import TitleInfoContainer from '../TitleInfoContainer'
import PropTypes from 'prop-types'
import './coverScreen.scss'

CoverScreen.propTypes = {
    mediaRow: PropTypes.any,
}

function CoverScreen({ mediaRow }) {
    return (
        <div className="Cover-screen">
            <TitleInfoContainer />
        </div>
    )
}

export default CoverScreen
