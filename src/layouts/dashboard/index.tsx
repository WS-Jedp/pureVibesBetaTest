import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Row, Col } from 'reactstrap'
import { DashboardMenu } from '../../components/dashboard/menu'
import { QuestionAnswer } from '../../components/dashboard/questionAnswer'

import { DashboardLayoutContainer, GoBackButton } from './styles'
import { RootState } from '../../store'
import { CurrentSurvey } from '../../store/survey/types'


interface DashboardLayoutProps {
    withGoBack?: boolean
}

export const DashboardLayout:React.FC<DashboardLayoutProps> = ({ children, withGoBack }) => {
    const navigate = useNavigate()


    return (
        <DashboardLayoutContainer className='d-flex flex-row'>
            <Col xs="12" md="4">
                <DashboardMenu />
            </Col>
            <Col xs="12" md="8" className='p-4 dashboard-children'>
                {
                    withGoBack && (
                        <GoBackButton onClick={() => navigate(-1)} className='text-decoration-none text-dark fw-bold'>
                                <BsArrowLeftShort size={30} /> Go Back
                        </GoBackButton>
                    )
                }
                {
                    children
                }
            </Col>
        </DashboardLayoutContainer>
    )
}

export const DashboardSurveyLayout:React.FC = ({ children }) => {
    const navigate = useNavigate()
    const currentSurvey = useSelector<RootState, CurrentSurvey>(state => state.surveys.currentSurvey)

    return (
        <DashboardLayoutContainer className='d-flex flex-row'>
            <Row className='w-100'>
                <Col xs="12" md="4">
                    <DashboardMenu />
                </Col>
                <Col xs="12" md="8" className='m-0 p-0 h-100'>
                    <Row className='m-0 p-0 h-100'>
                        <Col xs="7" className='m-0 p-4'>
                            <GoBackButton onClick={() => navigate(-1)} className='text-decoration-none text-dark fw-bold'>
                                <BsArrowLeftShort size={30} /> Go Back
                            </GoBackButton>
                            <h2 className='fs-1 fw-bold'>Beta Test</h2>

                            {
                                !currentSurvey ? (
                                    <section>
                                        <h3>There is no current survey selected</h3>
                                        <p>
                                            Try to select again the survey section that you want to answer
                                        </p>
                                    </section>
                                ) : (
                                    <>
                                        <h3 className='fs-4 fw-bold'>{ currentSurvey.name }</h3>
                                        <p className='fs-6 fw-normal'>Answer each one of the questions of the {currentSurvey.name} survey to be able to answer the next survey</p>
                                    </>
                                )
                            }

                        </Col>
                        <Col xs="5" className='m-0 p-0 h-100'>
                            <QuestionAnswer />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DashboardLayoutContainer>
    )
}