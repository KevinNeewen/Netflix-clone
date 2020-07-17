import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/formatter'

MediaModalBody.propTypes = {
    detail: PropTypes.object,
}

const getListOfGenresToString = genres => {
    return genres && genres.map(genre => genre.name).join(', ')
}

const getListOfCastToString = cast => {
    return (
        cast &&
        cast
            .map(person => person.name)
            .Slice(0, 4)
            .join(', ')
    )
}

export function MediaModalBody({ detail }) {
    return (
        <>
            <div className="detail-info">
                <div className="detail-info-numeric">
                    <span className="detail-info-numeric-vote-average">
                        {detail.vote_average} Rating
                    </span>
                    <span>{formatDate(detail.release_date)}</span>
                    <span>{detail.runtime} mins</span>
                </div>
                <div className="detail-info-overview">{detail.overview}</div>
                <div className="detail-info-cast-genre">
                    <span>
                        <span>Genres: </span>
                        {getListOfGenresToString(detail.genres)}
                    </span>
                    {/* <span>
                        <span>Cast: </span>
                        {getListOfCastToString(detail.genres)}
                    </span> */}
                </div>
            </div>
        </>
    )
}
