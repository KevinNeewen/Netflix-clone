import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'
import { buildImageUrl } from '../../utils/imageBuilder'

MediaModalHeader.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
}
export function MediaModalHeader({ imagePath, title }) {
    return (
        <>
            <img alt="Media" src={buildImageUrl(imagePath, 'w1280')} />
            <div className="title-info-container">
                <h1>{title}</h1>
                <Button>
                    <FontAwesomeIcon icon={['fas', 'play']} />
                    <span>Play</span>
                </Button>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={['far', 'thumbs-up']} />
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={['far', 'thumbs-down']} />
                </div>
            </div>
        </>
    )
}
