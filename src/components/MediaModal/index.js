import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import { MediaModalHeader } from './mediaModalHeader'
import { MediaModalBody } from './mediaModalBody'
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
                        <MediaModalHeader
                            title={mediaDetails.title}
                            imagePath={mediaDetails.backdrop_path}
                        />
                    </ModalHeader>
                    <ModalBody>
                        <MediaModalBody detail={mediaDetails} />
                    </ModalBody>
                </Modal>
            )}
        </div>
    )
}

export default MediaModal
