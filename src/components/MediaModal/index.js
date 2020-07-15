import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import './mediaModal.scss'

MediaModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
}

function MediaModal({ isOpen, closeModal }) {
    return (
        <div className="MediaModal">
            <Modal isOpen={isOpen} toggle={closeModal} className="Modal">
                <ModalHeader toggle={closeModal}>Modal title</ModalHeader>
                <ModalBody></ModalBody>
            </Modal>
        </div>
    )
}

export default MediaModal
