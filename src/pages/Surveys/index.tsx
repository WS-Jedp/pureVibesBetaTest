import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { SurveysState, setAllSurveys } from '../../store/survey'
import { DashboardLayout } from '../../layouts/dashboard'

import { SurveysMock } from '../../mocks/surveys'

import { SurveyCard } from '../../components/cards/survey'
import { AnswersState, setNewCurrentSurvey } from '../../store/answers'

export const Surveys:React.FC = () => {

    const dispatch = useDispatch()

    const surveyState = useSelector<RootState, SurveysState>(state => state.surveys)

    // Get all the surveys state
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        async function getSurveys() {
            setIsLoading(true)
            const surveys = await Promise.resolve(SurveysMock)
            dispatch(setAllSurveys(surveys))
            setIsLoading(false)
        }
        getSurveys()
    }, [])

    function isAvailable(surveyID: number): boolean {

        if(surveyState.currentSurvey) {
            const currentSurvey = surveyState.currentSurvey
            const currentSurveyIsDone = surveyState.surveysFinished.find(surveyID => surveyID === currentSurvey.id)

            if(currentSurveyIsDone) {
                return currentSurvey.id + 1 === surveyID
            }

            return currentSurvey.id === surveyID
        }

        if(surveyID === 1) {
            return true
        }

        return false

    }

    const [isAllSurveysFinished, setIsAllSurveysFinishesd] = useState<boolean>(false)
    useEffect(() => {
        if(surveyState.allSurveys.length === 0) return
        if(surveyState.surveysFinished.length === surveyState.allSurveys.length) (setIsAllSurveysFinishesd(true))
    }, [surveyState.surveysFinished])


    

    return (
        <DashboardLayout withGoBack>

            <h2 className='fw-bolder fs-1'>BETA Test</h2>
            <p className='fs-6 fw-normal'>
                Welcome and congratulations for making it this far! We are so excited for you to be a part of our APP!!
                This beta test is broken into four sections with a total of 18 questions. 
            </p>
            <p className='fs-6 fw-normal'>
                The questions types are Yes/No, linear (1-5), and short answer. Some calculus too... (just kidding). 
            </p>

            <h3 className='fw-bold fs-4'>
                Sections:
            </h3>

            {
                isLoading ? (
                    <section>
                        Is loading...
                    </section>
                ) : (
                    <ul>
                        {
                            surveyState.allSurveys.map(survey => (
                                <li className='my-4' key={survey.id}>
                                    <SurveyCard
                                        id={survey.id}
                                        isDone={surveyState.surveysFinished.some(surveyID => surveyID === survey.id)}
                                        name={survey.name}
                                        questionsDone={0}
                                        totalQuestion={5}
                                        isDisable={!isAvailable(survey.id)} 
                                    />
                                </li>
                            ))
                        }
                    </ul>
                )
            }

            {
                isAllSurveysFinished && (
                    <h3>Congratulations, you already finish all the BETA test surveys!</h3>
                )
            }


        
        </DashboardLayout>
    )
}