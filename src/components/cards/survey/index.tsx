import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRightShort, BsFillCheckCircleFill, BsFillQuestionCircleFill } from 'react-icons/bs'
import { Col, Row } from 'reactstrap'

import { SurveyCardContainer } from './styles'

interface SurveyCardProps {
    id: number
    name: string
    totalQuestion: number
    questionsDone: number
    isDone: boolean
}

export const SurveyCard:React.FC<SurveyCardProps> = ({ isDone, name, questionsDone, totalQuestion, id }) => {

    const navigate = useNavigate()

    const goToSurvey = () => navigate(`/dashboard/survey/${id}`)

    return (
        <SurveyCardContainer isDone={isDone} onClick={goToSurvey}>
            <Row className='m-0 p-0'>
                <Col xs="2" className='d-flex align-items-center justify-content-center survey-card-state p-0 m-0'>
                    {
                        isDone ? (
                            <BsFillCheckCircleFill size={24} color="white" />
                        ) : (
                            <BsFillQuestionCircleFill size={24} color="white" />
                        )
                    }
                </Col>
                <Col xs="6" className='d-flex flex-row align-items-center justify-content-between py-2 px-2'>
                    <strong>
                        { name }
                    </strong>
                </Col>
                <Col xs="2" className='d-flex align-items-center justify-content-center'>
                    <span className='fw-bold'>
                        {questionsDone} / {totalQuestion}
                    </span>
                </Col>
                <Col xs="2" className='d-flex align-items-center justify-content-center'>
                    <BsArrowRightShort size={30} />
                </Col>
            </Row>
        </SurveyCardContainer>
    )
}