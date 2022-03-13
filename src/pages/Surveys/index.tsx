import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { SurveysState, setAllSurveys, addSurveyIntoFinished, setCurrentSurvey } from '../../store/survey'
import { DashboardLayout } from '../../layouts/dashboard'
import { SurveysService } from '../../services/surveys'

import { Loading } from '../../containers/loading'
import { SurveyCard } from '../../components/cards/survey'
import { betaTestDone } from '../../store/user'

export const Surveys:React.FC = () => {

    const dispatch = useDispatch()

    const userID = useSelector<RootState, number>(state => state.user.user.id)
    const isBetaTestDone = useSelector<RootState, boolean>(state => state.user.isBetaTestDone)
    const surveyState = useSelector<RootState, SurveysState>(state => state.surveys)

    // Effect - Validating if the user finish already the beta test
    const [isAllSurveysFinished, setIsAllSurveysFinishesd] = useState<boolean>(false)
    useEffect(() => {
        async function getBetaTestState() {
            setIsLoading(true)
            const isBetaTestDoneResp = await SurveysService.get.userBetaTestState(userID)
            if(isBetaTestDoneResp.error) {
                console.error("We sorry, we couldn't get the state of the beta test")
                setIsLoading(false)
                return
            }

            const betaTestState = isBetaTestDoneResp.response
            if(betaTestState.isBetaTestDone) {
                setIsAllSurveysFinishesd(true)
                dispatch(betaTestDone())
            }
            setIsLoading(false)
        }

        !isBetaTestDone && getBetaTestState()
    }, [surveyState.surveysFinished])


    // Get all the surveys state
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        async function getSurveys() {
            setIsLoading(true)
            const allSurveysResp = await SurveysService.get.surveys()
            const surveysResp = await SurveysService.get.surveysState()

            if(surveysResp.error || allSurveysResp.error) {
                console.error("There is an error with the server")
                return
            }

            const surveys = allSurveysResp.response
            const userSurveysState = surveysResp.response

            const surveysSimpleData = surveys.map(survey => {

                let userSurveyState = userSurveysState.surveysState.find(surveyState => surveyState.survey_id === survey.id)
                let simpleSurvey = {
                    id: survey.id,
                    name: survey.name,
                    questionsTotal: survey.questionsTotal,
                    answersTotal: 0,                    
                }

                if(userSurveyState) {
                    simpleSurvey.answersTotal = userSurveyState.answersTotal
                }

                return simpleSurvey
            })

            userSurveysState.surveysState.forEach(survey => {
                if(survey.isComplete) dispatch(addSurveyIntoFinished(survey.survey_id))

                if(!surveyState.currentSurvey) {
                    dispatch(setCurrentSurvey({ 
                        id: survey.survey_id,
                        name: survey.name,
                        questions: [],
                        totalQuestions: survey.questionsTotal,
                        currentQuestion: survey.answersTotal + 1,
                        totalOfImages: 0
                     }))
                }
            })

            dispatch(setAllSurveys(surveysSimpleData))
            setIsAllSurveysFinishesd(userSurveysState.isBetaTestDone)
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
                    <Loading />
                ) : (
                    <ul>
                        {
                            surveyState.allSurveys.map(survey => (
                                <li className='my-4' key={survey.id}>
                                    <SurveyCard
                                        id={survey.id}
                                        isDone={surveyState.surveysFinished.some(surveyID => surveyID === survey.id)}
                                        name={survey.name}
                                        questionsDone={survey.answersTotal ? survey.answersTotal : 0}
                                        totalQuestion={survey.questionsTotal}
                                        isDisable={!isAvailable(survey.id)} 
                                    />
                                </li>
                            ))
                        }
                    </ul>
                )
            }

            {
                surveyState.allSurveys.length > 0 && isAllSurveysFinished && (
                    <h3>Congratulations, you already finish all the BETA test surveys!</h3>
                )
            }


        
        </DashboardLayout>
    )
}