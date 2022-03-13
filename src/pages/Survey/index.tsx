import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ResultsService } from '../../services/results'
import { SurveysService } from '../../services/surveys'
import { setCurrentSurvey } from '../../store/survey'
import { setNewCurrentSurvey } from '../../store/answers'
import { DashboardSurveyLayout } from '../../layouts/dashboard'
import { RootState } from '../../store'
import { addNewAnswer } from '../../store/answers'
import { Answer } from '../../core/DTO/Results'
import { SurveysDTO } from '../../core/DTO/Survey'

import { AppImageExampleContainer, ImagesContainer } from './styles'
import { CurrentSurvey } from '../../store/survey/types'

export const Survey:React.FC = () => {

    const params = useParams<{surveyID: string}>()
    const dispatch = useDispatch()
    const surveysState = useSelector<RootState, SurveysDTO>(state => state.surveys.allSurveys)
    const currentSurveyState = useSelector<RootState, CurrentSurvey>(state => state.surveys.currentSurvey)

    const [isLoading, setIsLoading] = useState(false)

    // Setting the current survey
    useEffect(() => {
        async function getCurrentSurvey() {
            setIsLoading(true)
            const surveyID = Number(params.surveyID)
            const currentSurveyResp = await SurveysService.get.survey(surveyID)
            const currentSurveyStaeResp = await SurveysService.get.surveyState(surveyID)
            let currentAnswers: Answer[]


            if(currentSurveyResp.error || currentSurveyStaeResp.error) {
                console.error("We sorry, we coulnd't get the current survey")
                return
            }

            const currentSurvey = currentSurveyResp.response
            const currentSurveySaved = surveysState.find(survey => survey.id === currentSurvey.id)
            
            if(currentSurveySaved.answersTotal > 0) {
                const currentAnswersResp = await ResultsService.get.answersFromSurvey(surveyID)

                if(currentAnswersResp.error) {
                    console.error("We sorry, we coulnd't get the current survey")
                    return
                }

                currentAnswers = currentAnswersResp.response.answers
            }

            dispatch(setCurrentSurvey({
                id: currentSurvey.id,
                name: currentSurvey.name,
                currentQuestion: currentSurveySaved ? currentSurveySaved.answersTotal : 0,
                totalQuestions: currentSurvey.questions.length,
                questions: currentSurvey.questions,
                totalOfImages: currentSurvey.totalOfImages
            }))
            dispatch(setNewCurrentSurvey(currentSurvey.id))
            currentAnswers && currentAnswers.forEach(answer => {
                dispatch(addNewAnswer(answer))
            })

            setIsLoading(false)
        }

        getCurrentSurvey()
    }, [])


    return (
        <DashboardSurveyLayout isLoading={isLoading}>
            <ImagesContainer>
                {
                    currentSurveyState && Array.from(Array(3).keys()).map((img) => (
                        <AppImageExampleContainer>
                            <img src={`/assets/images/surveys/survey-1-img-${img}.jpg`} alt={`Image of the ${currentSurveyState.id} survey`} />
                        </AppImageExampleContainer>
                    ))
                }
            </ImagesContainer>
        </DashboardSurveyLayout>
    )
}