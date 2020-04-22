import React from 'react'
import TitleInfoContainer from '../TitleInfoContainer'
import MediaRow from '../MediaRow'
import PropTypes from 'prop-types'
import './coverScreen.scss'

CoverScreen.propTypes = {
    mediaRow: PropTypes.any,
}

function CoverScreen({ mediaRow }) {
    return (
        <div className="Cover-screen">
            <TitleInfoContainer />
            <MediaRow
                title={mediaRow.categoryTitle}
                medias={mediaRow.mediasPerCategory}
            />
        </div>
    )
}

export default CoverScreen
