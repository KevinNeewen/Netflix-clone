import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Container } from 'reactstrap'
import { formatDate } from '../../utils/formatter'

ModalDetailInfo.propTypes = {
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
            .slice(0, 3)
            .join(', ')
    )
}

export function ModalDetailInfo({ detail }) {
    return (
        <Container className="detail-info">
            <Row>
                <Col sm="8">
                    <div className="detail-info-numeric">
                        <span className="detail-info-numeric-vote-average">
                            {detail.vote_average} Rating
                        </span>
                        <span>
                            {!!detail.release_date
                                ? formatDate(detail.release_date)
                                : formatDate(detail.first_air_date)}
                        </span>
                        <span>{detail.runtime} mins</span>
                    </div>
                    <div className="detail-info-overview">
                        {detail.overview}
                    </div>
                </Col>
                <Col sm="4">
                    <div className="detail-info-cast-genre">
                        <div>
                            <span>Cast: </span>
                            {getListOfCastToString(detail.credits.cast)}
                        </div>
                        <div>
                            <span>Genres: </span>
                            {getListOfGenresToString(detail.genres)}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
