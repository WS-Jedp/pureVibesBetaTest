import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IndividualSurveysMock } from '../../mocks/surveys'
import { RootState } from '../../store'
import { addSurveyIntoFinished, setCurrentSurvey } from '../../store/survey'
import { setNewCurrentSurvey } from '../../store/answers'
import { CurrentSurvey } from '../../store/survey/types'
import { DashboardSurveyLayout } from '../../layouts/dashboard'

export const Survey:React.FC = () => {

    const params = useParams<{surveyID: string}>()
    const dispatch = useDispatch()

    const currentSurvey = useSelector<RootState, CurrentSurvey>(state => state.surveys.currentSurvey)

    // Setting the current survey
    useEffect(() => {
        async function getCurrentSurvey() {
            const currentSurvey = await Promise.resolve(IndividualSurveysMock.find(survey => survey.id === Number(params.surveyID)))
            
            dispatch(setCurrentSurvey({
                id: currentSurvey.id,
                name: currentSurvey.name,
                currentQuestion: currentSurvey.answersTotal,
                totalQuestions: currentSurvey.questions.length,
                questions: currentSurvey.questions
            }))
            dispatch(setNewCurrentSurvey(currentSurvey.id))
        }
        getCurrentSurvey()
    }, [])


    return (
        <DashboardSurveyLayout>
            Hello from { params.surveyID }
        </DashboardSurveyLayout>
    )
}