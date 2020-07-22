import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import { MediaModalHeader } from './mediaModalHeader'
import { ModalDetailInfo } from './modalDetailInfo'
import MediaCardGrid from '../MediaCardGrid'
import './mediaModal.scss'

MediaModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    mediaDetails: PropTypes.object,
}

function MediaModal({ isOpen, closeModal, mediaDetails }) {
    return (
        <div>
            {!!mediaDetails && (
                <Modal isOpen={isOpen} toggle={closeModal}>
                    <ModalHeader toggle={closeModal} tag="div">
                        <MediaModalHeader
                            title={mediaDetails.title || mediaDetails.name}
                            imagePath={mediaDetails.backdrop_path}
                        />
                    </ModalHeader>
                    <ModalBody>
                        <ModalDetailInfo detail={mediaDetails} />
                        {mediaDetails.similar &&
                            mediaDetails.similar.results.length > 0 && (
                                <>
                                    <h4>More Like This</h4>
                                    <MediaCardGrid
                                        medias={mediaDetails.similar.results}
                                    />
                                </>
                            )}
                    </ModalBody>
                </Modal>
            )}
        </div>
    )
}

export default MediaModal
