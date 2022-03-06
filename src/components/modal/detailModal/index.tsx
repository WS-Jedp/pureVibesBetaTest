import React from 'react'
import { DetailModalContainer } from './styles'

import { InlineButton, PureVibesButton } from '../../button'


interface DetailModalProps {
    content?: string
    title: string
    onClose: Function
    onAgree: Function
    closeText?: string
    agreeText?: string
}

export const DetailModal:React.FC<DetailModalProps> = ({ children, content, onAgree, onClose, title, agreeText, closeText }) => {

    return (
        <DetailModalContainer>
            <h2 className='fw-bold fs-3 w-100 p-3'>
                { title }
            </h2>
            <div className='detail-modal-content my-3 px-3'>
                { children ? children : content }
            </div>
            <div className='detail-modal-actions d-flex flex-row align-items-center justify-content-end'>
                <InlineButton 
                    action={onAgree}
                    text={closeText || "Close"}
                />
                <PureVibesButton 
                    action={onClose}
                    text={agreeText || "Accept"}
                />
            </div>
        </DetailModalContainer>
    )
}