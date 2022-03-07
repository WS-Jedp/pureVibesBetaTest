import React, { useEffect } from 'react'
import { BsCardText } from 'react-icons/bs'
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services/auth'

import { DashboardLayout } from '../../layouts/dashboard'

import { InformationCard } from '../../components/cards/information'

export const Home: React.FC = () => {

    return (
        <DashboardLayout>
            <h2 className='fw-bolder fs-1'>Home</h2>
            <p className='fs-6 fw-normal'>
                We have designed this beta test to be simple. In order to qualify for the <span className='fw-bold text-success'>500 USD</span> raffle prize, you will be required to <span className='fw-bold text-success text-uppercase'>use the App Twice</span> and <span className='fw-bold text-success text-uppercase'>complete the Survey</span> about your experiences. Before beginning the beta test, you must accept the Terms of Use, read the rules, and review the Friend Referral Tab— This will take about 10-20 minutes to complete.
            </p>

            <Row className='d-flex flex-row'>
                <InformationCard 
                    Icon={BsCardText}
                    description="Please accept Terms and Conditions before you begin the beta test."
                    title='Terms Of Use'
                    onClick={() => {}}
                />
                <InformationCard 
                    Icon={BsCardText}
                    description="Please read the rules to be eligible to begin the beta test."
                    title='Rules'
                    onClick={() => {}}
                />
                <InformationCard 
                    Icon={BsCardText}
                    description="Friend referrals are a way for you to earn extra raffle entries. To complete, just submit your friend's name and email address."
                    title='Friend Referral (Optional)'
                    onClick={() => {}}
                />
                <InformationCard 
                    Icon={BsCardText}
                    description="This beta test will be administered as an interactive survey questionnaire. Questions can be saved and answered at your own pace."
                    title='BETA Test'
                    onClick={() => {}}
                />
            </Row>


            
        </DashboardLayout>
    )
}