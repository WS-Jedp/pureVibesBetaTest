import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { User } from '../../../core/DTO/User'

import { Link } from 'react-router-dom'
import { PureVibesButtonAlternative } from '../../button'
import { DashboardMenuContainter, QuickLinks } from './styles'

export const DashboardMenu:React.FC = () => {

    const user = useSelector<RootState, User>(state => state.user.user)

    return (
        <DashboardMenuContainter className='p-4 d-flex flex-column justify-content-between'>
                        <div>
                            <h2>Dharma Survey Beta</h2>
                            <strong className='fw-light'>Welcome {user ? user.name : "Guest"}!</strong>

                            <p className='fs-6 fw-light my-3'>
                                Welcome and thank you for your participation! If you have any questions during any stages of this process, please Contact Us at 
                            </p>

                            <span className='fs-6 fw-normal'>info@mydharma.app</span>

                            <div className='my-5'>
                                <strong>Quick Links</strong>
                                <QuickLinks className='mx-0'>
                                    <li className='my-2'>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className='my-2'>
                                        <Link to="/login">Beta survey</Link>
                                    </li>
                                </QuickLinks>
                            </div>

                            <PureVibesButtonAlternative
                                action={() => {}}
                                text="Log out"
                            />
                        </div>


                        <div className='d-flex flex-column align-items-start justify-content-start my-3'>
                            <a href="https://pinterest.com" className='my-2'>
                                <img width={18} src="/assets/images/pinterest_logo.svg" alt="Logo of Pinterest, go to Pure Vibes pinterest profile" />    
                            </a>
                            <small className='fw-lighter text-center'>
                                © Dharma 2022
                            </small>
                        </div>

                    </DashboardMenuContainter>
    )
}