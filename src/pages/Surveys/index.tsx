import React from 'react'
import { DashboardLayout } from '../../layouts/dashboard'

import { SurveyCard } from '../../components/cards/survey'

export const Surveys:React.FC = () => {

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

            <ul>
                <li className='my-4'>
                    <SurveyCard
                        id={1}
                        isDone={false}
                        name="About the login and home"
                        questionsDone={0}
                        totalQuestion={5}
                    />
                </li>
                <li className='my-4'>
                    <SurveyCard 
                        id={2}
                        isDone={true}
                        name="About the login and home"
                        questionsDone={0}
                        totalQuestion={5}
                    />
                </li>
            </ul>


        
        </DashboardLayout>
    )
}