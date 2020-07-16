import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
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
                    <ModalHeader toggle={closeModal}>
                        <img
                            alt="Media"
                            src={buildImageUrl(
                                mediaDetails.backdrop_path,
                                'w500'
                            )}
                        />
                    </ModalHeader>
                    <ModalBody></ModalBody>
                </Modal>
            )}
        </div>
    )
}

export default MediaModal
