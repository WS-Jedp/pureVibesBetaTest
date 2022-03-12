import React from 'react'
import { Loader } from './styles'
import { Modal } from '../../components/modal'

export const Loading:React.FC = () => {

    return (
        <Modal>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <Loader />
                <small className='text-white fw-lighter p-3'>
                    Loading...
                </small>
            </div>
        </Modal>
    )
}