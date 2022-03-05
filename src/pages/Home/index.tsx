import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services/auth'

import { DashboardSurveyLayout } from '../../layouts/dashboard'

export const Home: React.FC = () => {

    useEffect(() => {
        const getData = async () => {
            const logout = await AuthServices.post.logout() 
        }
        getData()
    }, [])

    return (
        <DashboardSurveyLayout>
            <p>
                Hello from home
            </p>
        </DashboardSurveyLayout>
    )
}