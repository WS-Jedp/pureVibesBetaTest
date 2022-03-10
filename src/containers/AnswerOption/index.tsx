import React from 'react'
import { QUESTION_TYPE } from '../../core/DTO/Questions'

import { Boolean } from '../../components/answers/boolean'
import { Rate } from '../../components/answers/rate'
import { Text } from '../../components/answers/text'

interface AnswerOptionsInterface {
    questionType: QUESTION_TYPE
    setState: React.SetStateAction<any>
    defaultValue?: any
}

export const AnswerOption:React.FC<AnswerOptionsInterface> = ({ questionType, setState, defaultValue }) => {


    switch (questionType) {
        case QUESTION_TYPE.BOOLEAN:
            return (
                <Boolean setState={setState} defaultValue={defaultValue}></Boolean>
            )

        case QUESTION_TYPE.RATE:
            return (
                <Rate setState={setState} defaultValue={defaultValue}></Rate>
            )

        case QUESTION_TYPE.TEXT:
            return (
                <Text setState={setState} defaultValue={defaultValue}></Text>
            )

        default:
            return (
                <span className='text-danger'>
                    Wrong type of question    
                </span>
            )
    }
}