import React from 'react'
import PropTypes from 'prop-types'
import MediaRow from '../MediaRow'
import './mediaShelf.scss'

MediaShelf.propTypes = {
    mediaRows: PropTypes.arrayOf(PropTypes.any),
}

function MediaShelf({ mediaRows }) {
    return (
        <section className="Media-shelf">
            {mediaRows &&
                mediaRows.map(mediaRow => {
                    return (
                        <MediaRow
                            key={mediaRow.categoryTitle}
                            title={mediaRow.categoryTitle}
                            medias={mediaRow.mediasPerCategory}
                            isPoster={mediaRow.isPoster}
                        />
                    )
                })}
        </section>
    )
}

export default MediaShelf
