import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services/auth'

import { DashboardLayout } from '../../layouts/dashboard'

export const Home: React.FC = () => {

    return (
        <DashboardLayout>
            <h2 className='fw-bolder fs-1'>Home</h2>
            <p className='fs-6 fw-normal'>
                We have designed this beta test to be simple. In order to qualify for the <span className='fw-bold text-success'>500 USD</span> raffle prize, you will be required to <span className='fw-bold text-success text-uppercase'>use the App Twice</span> and <span className='fw-bold text-success text-uppercase'>complete the Survey</span> about your experiences. Before beginning the beta test, you must accept the Terms of Use, read the rules, and review the Friend Referral Tab— This will take about 10-20 minutes to complete.
            </p>
            
        </DashboardLayout>
    )
}