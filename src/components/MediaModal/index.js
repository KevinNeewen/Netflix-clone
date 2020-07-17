import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { buildImageUrl } from '../../utils/imageBuilder'
import PropTypes from 'prop-types'
import './mediaModal.scss'

MediaModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    mediaDetails: PropTypes.object,
}

function MediaModal({ isOpen, closeModal, mediaDetails }) {
    console.log('movie details')
    console.log(mediaDetails)
    return (
        <div>
            {!!mediaDetails && (
                <Modal isOpen={isOpen} toggle={closeModal}>
                    <ModalHeader toggle={closeModal} tag="div">
                        <img
                            alt="Media"
                            src={buildImageUrl(
                                mediaDetails.backdrop_path,
                                'w1280'
                            )}
                        />
                        <div className="title-info-container">
                            <h1>{mediaDetails.title}</h1>
                            <Button>
                                <FontAwesomeIcon icon={['fas', 'play']} />
                                <span>Play</span>
                            </Button>
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={['far', 'thumbs-up']} />
                            </div>
                            <div className="icon-wrapper">
                                <FontAwesomeIcon
                                    icon={['far', 'thumbs-down']}
                                />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody></ModalBody>
                </Modal>
            )}
        </div>
    )
}

export default MediaModal
