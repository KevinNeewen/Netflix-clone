import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'
import { buildImageUrl } from '../../utils/imageBuilder'

MediaModalHeader.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    imageLoad: PropTypes.func,
}
export function MediaModalHeader({ imagePath, title, imageLoad }) {
    return (
        <>
            <img
                alt="Media"
                onLoad={imageLoad}
                src={buildImageUrl(imagePath, 'w1280')}
            />
            <div className="header-info-container">
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
