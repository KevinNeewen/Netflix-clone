import React, { useRef } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import { MediaModalHeader } from './mediaModalHeader'
import { ModalDetailInfo } from './modalDetailInfo'
import MediaCardGrid from '../MediaCardGrid'
import Spinner from '../Spinner'
import './mediaModal.scss'

MediaModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    mediaDetails: PropTypes.object,
    isModalLoading: PropTypes.bool,
    setIsModalLoading: PropTypes.func,
}

function MediaModal({
    isOpen,
    closeModal,
    mediaDetails,
    isModalLoading,
    setIsModalLoading,
}) {
    const loadedModalImages = useRef(0)
    const onModalMediasLoaded = () => {
        if (
            ++loadedModalImages.current >=
            (mediaDetails.similar.results.length >= 9 ? 10 : 1)
        ) {
            setIsModalLoading(false)
        }
    }

    return (
        <div>
            {!!mediaDetails && (
                <Modal isOpen={isOpen} toggle={closeModal}>
                    {!!isModalLoading && <div className="background" />}
                    <ModalHeader toggle={closeModal} tag="div">
                        {!!isModalLoading && <Spinner />}
                        <MediaModalHeader
                            title={mediaDetails.title || mediaDetails.name}
                            imagePath={mediaDetails.backdrop_path}
                            imageLoad={onModalMediasLoaded}
                            isModalLoading={isModalLoading}
                        />
                    </ModalHeader>
                    <ModalBody>
                        <ModalDetailInfo detail={mediaDetails} />
                        {mediaDetails.similar &&
                            mediaDetails.similar.results.length > 0 && (
                                <>
                                    <h4>More Like This</h4>
                                    <MediaCardGrid
                                        imagesLoad={onModalMediasLoaded}
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
