import React from 'react'
import { ButtonProps } from './types'
import { PureVibesButton as PVButton, PureVibesButtonAlternative as PVButtonAlternative, InlineButton as PVInlineButton } from './styles'

export const PureVibesButton:React.FC<ButtonProps> = ({ action, text }) => (
    <PVButton onClick={() => action()}>
        { text }
    </PVButton>
)

export const PureVibesButtonAlternative:React.FC<ButtonProps> = ({ action, text }) => (
    <PVButtonAlternative onClick={() => action()}>
        { text }
    </PVButtonAlternative>
)

export const InlineButton:React.FC<ButtonProps> = ({ action, text }) => (
    <PVInlineButton onClick={() => action()}>
        { text }
    </PVInlineButton>
)