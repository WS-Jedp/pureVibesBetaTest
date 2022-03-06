import React, { useState } from 'react'
import { QUESTION_TYPE } from '../../../core/DTO/Questions'
import { DashboardQuestionAnswserContainer } from './styles'
import { PureVibesButton, InlineButton } from '../../button'

import { AnswerOption } from '../../../containers/AnswerOption'

export const QuestionAnswer:React.FC = () => {

    const [isBoolean, setIsBoolean] = useState<boolean>(false)

    return (
        <DashboardQuestionAnswserContainer className='p-4 h-100 d-flex flex-column align-items-center justify-content-around'>
            <h3 className='fs-6 fw-bolder'>Question #4/5</h3>
            <p className='text-center fw-bold fs-6'>
                Tell a little bit about yourself, like what are your dreams and all that kind of stuff
            </p>

            <AnswerOption 
                questionType={QUESTION_TYPE.BOOLEAN}
                setState={setIsBoolean}
            />

            <div className='d-flex flex-column justify-content-center align-items-center '>
                <PureVibesButton 
                    action={() => {}}
                    text="Next Question"
                    />
                <InlineButton 
                    action={() => {}}
                    text="Previous Question"
                />
            </div>
        </DashboardQuestionAnswserContainer>

    )
}