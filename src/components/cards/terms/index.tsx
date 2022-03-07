import React from 'react'
import { IconType } from 'react-icons'
import { BsCheckCircle } from 'react-icons/bs'

import { InlineButton, PureVibesButton } from '../../button'
import { TermsCardContainer } from './styles'

interface TermsCardProps {
    Icon: IconType,
    title: string,
    onAction: Function
    actionText?: string
    isDone?: boolean
    isDoneTextAction?: string
}

export const TermsCard:React.FC<TermsCardProps> = ({ Icon, onAction, title, actionText, children, isDone, isDoneTextAction }) => {

    return (
        <TermsCardContainer isDone={isDone}>
            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                {
                    !isDone ? (
                        <Icon size={72} />
                    ) : (
                        <BsCheckCircle size={72} />
                    )
                }

                <h2 className='fw-bold fs-3 my-2 w-100 text-center'>
                    {
                        title
                    }
                </h2>
            </div>

            {
                !isDone ? (
                    <PureVibesButton 
                        text={actionText || "Read all"}
                        action={onAction}
                    />
                ) : (
                    <InlineButton 
                        text={isDoneTextAction || "Read all"}
                        action={onAction}
                    />
                )
            }
        </TermsCardContainer>
    )
}