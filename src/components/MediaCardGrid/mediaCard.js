import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap'
import { buildImageUrl } from '../../utils/imageBuilder'
import { formatDate } from '../../utils/formatter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MediaCard = ({ details }) => {
    const [onHover, setOnHover] = useState(false)

    MediaCard.propTypes = {
        details: PropTypes.object,
    }

    const GetFirstSentence = (str, limit) => {
        if (str === null) {
            return null
        }
        if (str.length >= limit) {
            return `${str.substring(0, limit)}...`
        }

        return `${str.split('.', 1)[0]}.`
    }

    const {
        title,
        name,
        release_date,
        first_air_date,
        backdrop_path,
        overview,
        vote_average,
    } = details

    return (
        <Card
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            {!!onHover && (
                <FontAwesomeIcon icon={['far', 'play-circle']} size="3x" />
            )}
            <div className="card-img">
                <CardImg
                    top
                    width="100%"
                    src={buildImageUrl(backdrop_path, 'w500')}
                    alt="Card media image"
                />
            </div>
            <CardBody>
                <CardTitle>{title || name}</CardTitle>
                <CardSubtitle>
                    <span className="card-subtitle-vote-average">
                        {vote_average} Rating
                    </span>
                    <span className="card-subtitle-release-date">
                        {!!release_date
                            ? formatDate(release_date)
                            : formatDate(first_air_date)}
                    </span>
                </CardSubtitle>
                <CardText>{GetFirstSentence(overview, 150)}</CardText>
            </CardBody>
        </Card>
    )
}
export default MediaCard
