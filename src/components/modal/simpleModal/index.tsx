import React from 'react'
import { PureVibesButton } from '../../button'
import { SimpleModalContainer } from './styles'

interface SimpleModalProps {
    title: string
    content: string
    onAction: Function
    actionText?: string
}

export const SimpleModal:React.FC<SimpleModalProps> = ({ content, onAction, title, actionText, children }) => {

    return (
        <SimpleModalContainer>
            <div className='p-3'>
                <h2 className='fw-bolder w-100'>
                    { title }
                </h2>
                {
                    children ? children : (
                        <p>
                            { content }
                        </p>
                    )
                }
            </div>
            <div className='simple-modal-actions d-flex align-items-center justify-content-center'>
                <PureVibesButton 
                    text={ actionText || "Accept" }
                    action={onAction}
                />
            </div>
        </SimpleModalContainer>
    )
}