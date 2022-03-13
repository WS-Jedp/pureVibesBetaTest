import React from 'react'
import { ButtonProps } from './types'
import { PureVibesButton as PVButton, PureVibesButtonAlternative as PVButtonAlternative, InlineButton as PVInlineButton } from './styles'

export const PureVibesButton:React.FC<ButtonProps> = ({ action = () => {}, text, isDisable, isFormButton }) => (
    <PVButton onClick={() => action()} isDisable={isDisable} disabled={isDisable} type={isFormButton ? 'submit' : 'button'}>
        { text }
    </PVButton>
)

export const PureVibesButtonAlternative:React.FC<ButtonProps> = ({ action, text, isDisable }) => (
    <PVButtonAlternative onClick={() => action()}>
        { text }
    </PVButtonAlternative>
)

export const InlineButton:React.FC<ButtonProps> = ({ action, text, isDisable }) => (
    <PVInlineButton onClick={() => action()}>
        { text }
    </PVInlineButton>
)