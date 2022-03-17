import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Question } from '../../../core/DTO/Questions'
import { DashboardQuestionAnswserContainer } from './styles'
import { PureVibesButton, InlineButton } from '../../button'

import { ResultsService } from '../../../services/results'
import { Loading } from '../../../containers/loading'
import { AnswerOption } from '../../../containers/AnswerOption'
import { RootState } from '../../../store'
import { addNewAnswer, AnswersState, setNewCurrentSurvey, updateAnswer } from '../../../store/answers'
import { setNewQuestion, addSurveyIntoFinished, setCurrentSurvey } from '../../../store/survey'
import { CurrentSurvey } from '../../../store/survey/types'
import { Answer } from '../../../core/DTO/Results'

export const QuestionAnswer:React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const allFinishedSurveys = useSelector<RootState, number[]>(state => state.surveys.surveysFinished)
    const currentSurvey = useSelector<RootState, CurrentSurvey>(state => state.surveys.currentSurvey)
    const resultsState = useSelector<RootState, AnswersState>(state => state.answers)

    const [isLoading, setIsLoading] = useState<boolean>()

    const [currentQuestion, setCurrentQuestion] = useState<Question>()
    useEffect(() => {
        if(!currentSurvey) return
        const question = currentSurvey.questions[currentSurvey.currentQuestion]
        setCurrentQuestion(question)
    }, [currentSurvey])

    async function saveSurveyAnswers(allAnswers: Answer[]) {
        setIsLoading(true)

        const currentSurveyAnswers = {
            survey_id: currentSurvey.id,
            answers: allAnswers
        }

        const resp = await ResultsService.post.saveAnswers(currentSurveyAnswers)

        if(resp.error) {
            console.error("We sorry, we couldn't save the answers, try later")
            setIsLoading(false)
            return false
        }

        if(resp.response.created) {
            setAnswer(null)
            navigate('/surveys')
            return true
        }
    }

    const [answer, setAnswer] = useState<any>()
    async function handleSaveAnswers() {

        // handling if it is the last question of the survey
        if(currentSurvey.currentQuestion + 1 === currentSurvey.totalQuestions) {
            if(allFinishedSurveys.some(surveyID => surveyID === currentSurvey.id)) {
                // Logic to show erorr message
                navigate('/surveys')
                return
            }
            await dispatch(addNewAnswer({
                answer,
                question_id: currentQuestion.id,
            }))
            dispatch(addSurveyIntoFinished(currentSurvey.id))
            dispatch(setNewCurrentSurvey(currentSurvey.id + 1))
            await saveSurveyAnswers([...resultsState.answers, {
                answer,
                question_id: currentQuestion.id,
            }])
            return
        }

        const currentAnswerQuestion = resultsState.answers.find(answer => answer.question_id === currentQuestion.id)
        const newQuestionPosition = currentSurvey.currentQuestion + 1
        const currentAnswer = currentAnswerQuestion && resultsState.answers.find(currAnswer => currAnswer.question_id === currentAnswerQuestion.question_id)
        const currentNextAnswer = currentAnswerQuestion && resultsState.answers.find(currAnswer => currAnswer.question_id === (currentAnswerQuestion.question_id + 1))

        if(!currentAnswerQuestion) {
            dispatch(addNewAnswer({
                answer,
                question_id: currentQuestion.id,
            }))
            setAnswer(null)
        } else if(currentAnswerQuestion.answer !== answer){
            dispatch(updateAnswer({
                ...currentAnswer,
                answer
            }))
            setAnswer(null)
        }

        dispatch(setNewQuestion(newQuestionPosition))
        currentNextAnswer ? setAnswer(currentNextAnswer.answer) : setAnswer(null)
    }

    function goToLastQuestion() {
        const newQuestionPosition = currentSurvey.currentQuestion - 1
        const currentAnswer = resultsState.answers.find(answer => answer.question_id === currentSurvey.questions[newQuestionPosition].id)
        setAnswer(currentAnswer.answer)
        dispatch(setNewQuestion(newQuestionPosition))
    }


    if(!currentSurvey || !currentQuestion) return (
        <DashboardQuestionAnswserContainer className='p-4 h-100 d-flex flex-column align-items-center justify-content-around'>
            <small>Loading...</small>
        </DashboardQuestionAnswserContainer>
    )

    return (
        <DashboardQuestionAnswserContainer className='p-4 h-100 d-flex flex-column align-items-center justify-content-around'>
            <h3 className='fs-6 fw-bolder'>Question #{currentSurvey.currentQuestion + 1}/{currentSurvey.totalQuestions}</h3>
            <p className='text-center fw-bold fs-6'>
                { currentQuestion.question }
            </p>

            <AnswerOption 
                questionType={currentQuestion.type}
                setState={setAnswer}
                defaultValue={answer}
            />

            <div className='d-flex flex-column justify-content-center align-items-center '>
                <PureVibesButton 
                    action={handleSaveAnswers}
                    text={currentSurvey.currentQuestion + 1 === currentSurvey.totalQuestions ? "Save Answers" : "Next Question"}
                    isDisable={typeof answer === 'boolean' ? false : !answer}
                />
                {
                    currentSurvey.currentQuestion >= 1 && (
                        <InlineButton 
                            action={goToLastQuestion}
                            text="Previous Question"
                        />
                    )
                }
            </div>

            {
                isLoading && (
                    <Loading />
                )
            }
        </DashboardQuestionAnswserContainer>

    )
}