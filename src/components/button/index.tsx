import React from 'react'
import { ButtonProps } from './types'
import { PureVibesButton as PVButton } from './styles'

export const PureVibesButton:React.FC<ButtonProps> = ({ action, text }) => (
    <PVButton onClick={() => action()}>
        { text }
    </PVButton>
)