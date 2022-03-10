import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Question } from '../../../core/DTO/Questions'
import { DashboardQuestionAnswserContainer } from './styles'
import { PureVibesButton, InlineButton } from '../../button'

import { RoleService } from '../../../services/results'

import { AnswerOption } from '../../../containers/AnswerOption'
import { RootState } from '../../../store'
import { addNewAnswer, AnswersState, setNewCurrentSurvey } from '../../../store/answers'
import { setNewQuestion, addSurveyIntoFinished, setCurrentSurvey } from '../../../store/survey'
import { CurrentSurvey } from '../../../store/survey/types'

export const QuestionAnswer:React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const allFinishedSurveys = useSelector<RootState, number[]>(state => state.surveys.surveysFinished)
    const currentSurvey = useSelector<RootState, CurrentSurvey>(state => state.surveys.currentSurvey)
    const answers = useSelector<RootState, AnswersState>(state => state.answers)

    async function saveSurveyAnswers() {

        const currentSurveyAnswers = {
            survey_id: currentSurvey.id,
            answers: answers.answers
        }

        // const resp = await RoleService.post.saveAnswers(currentSurveyAnswers)

        // if(!resp.error) return false

        // if(resp.response.created) {
        //     setAnswer(null)
        //     navigate('/surveys')
        //     return true
        // }
        
        console.log("Answers saved it")
        navigate('/surveys')

    }

    const [answer, setAnswer] = useState<any>()
    async function handleSaveAnswers() {
        dispatch(addNewAnswer({
            answer,
            question_id: currentQuestion.id,
        }))
        setAnswer(null)

        if(currentSurvey.currentQuestion + 1 === currentSurvey.totalQuestions) {
            if(allFinishedSurveys.some(surveyID => surveyID === currentSurvey.id)) {
                // Logic to show erorr message
                navigate('/surveys')
                return
            }
            dispatch(addSurveyIntoFinished(currentSurvey.id))
            dispatch(setNewCurrentSurvey(currentSurvey.id + 1))
            await saveSurveyAnswers()
            return
        }

        dispatch(setNewQuestion(currentSurvey.currentQuestion + 1))
    }

    function goToLastQuestion() {
        const newQuestionPosition = currentSurvey.currentQuestion - 1
        const currentAnswer = answers.answers.find(answer => answer.question_id === currentSurvey.questions[newQuestionPosition].id)
        setAnswer(currentAnswer.answer)
        dispatch(setNewQuestion(newQuestionPosition))
    }

    const [currentQuestion, setCurrentQuestion] = useState<Question>()
    
    useEffect(() => {
        if(!currentSurvey) return
        const question = currentSurvey.questions[currentSurvey.currentQuestion]
        setCurrentQuestion(question)
    }, [currentSurvey])


    if(!currentSurvey || !currentQuestion) return (
        <DashboardQuestionAnswserContainer className='p-4 h-100 d-flex flex-column align-items-center justify-content-around'>
            <h3>Please try to select a survey again</h3>
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
                defaultValue={answer ? answer : null}
            />

            <div className='d-flex flex-column justify-content-center align-items-center '>
                <PureVibesButton 
                    action={handleSaveAnswers}
                    text={currentSurvey.currentQuestion + 1 === currentSurvey.totalQuestions ? "Finish" : "Next Question"}
                    isDisable={!answer}
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
        </DashboardQuestionAnswserContainer>

    )
}