import React from 'react'
import { ModalContainer } from './styles'

export const Modal:React.FC = ({ children }) => {

    return (
        <ModalContainer>
            {
                children
            }
        </ModalContainer>
    )
}