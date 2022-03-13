import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { ROLE } from '../../core/DTO/Role'

export const AuthorizeSurveysContainer:React.FC = () => {

    const navigate = useNavigate()
    const userRole = useSelector<RootState, ROLE>(state => state.role.role)  

    useEffect(() => {
        if(userRole === ROLE.GUEST) {
            navigate('/home')
        }
    }, [userRole])

    return (
        <Outlet />
    )
}