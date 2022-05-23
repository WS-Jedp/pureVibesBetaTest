import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../store'
import { removeUser } from '../../../store/user'
import { AuthServices } from '../../../services/auth'
import { User } from '../../../core/DTO/User'

import { Loading } from '../../../containers/loading'
import { PureVibesButtonAlternative } from '../../button'
import { DashboardMenuContainter, QuickLinks } from './styles'
import { AUTH_KEY_LOCAL_STORAGE } from '../../../core/DTO/Auth'
import { removeRole } from '../../../store/role'

export const DashboardMenu:React.FC = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const user = useSelector<RootState, User>(state => state.user.user)

    const onLogout = async () => {
        setIsLoading(true)
        const isLogout = await AuthServices.post.logout()
        if(isLogout.error) {
            console.error("We sorry, there it was an server error")
            setIsLoading(false)
            return
        }

        localStorage.removeItem(AUTH_KEY_LOCAL_STORAGE)
        dispatch(removeRole())
        dispatch(removeUser())
        navigate('/login')
    }

    const onMenuSeeMore = () => setIsMenuOpen(!isMenuOpen)

    return (
        <DashboardMenuContainter className='p-4 d-flex flex-column justify-content-between'>
            <div>
                <h2>Dharma Survey Beta</h2>
                <strong className='fw-light'>Welcome {user ? user.name : "Guest"}!</strong>
                
                <div className={`menu-options ${isMenuOpen ? 'is-open' : 'is-close'}`}>
                    <p className='fs-6 fw-light my-3'>
                        Welcome and thank you for your participation! If you have any questions during any stages of this process, please Contact Us at 
                    </p>
                
                    <span className='fs-6 fw-normal'>info@mydharma.app</span>

                    <div className='my-5'>
                        <strong>Quick Links</strong>
                        <QuickLinks className='mx-0'>
                            <li className='my-2'>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className='my-2'>
                                <Link to="/rules">Rules</Link>
                            </li>
                            {
                                
                            }
                            <li className='my-2'>
                                <Link to="/invite-friend">Invite Friend</Link>
                            </li>
                            <li className='my-2'>
                                <Link to="/terms-of-use">Terms Of Use</Link>
                            </li>
                        </QuickLinks>
                    </div>

                    <PureVibesButtonAlternative
                        action={onLogout}
                        text="Log out"
                    />
                </div>

                <div className="menu-action my-1">
                    <strong onClick={onMenuSeeMore}>
                        {
                            isMenuOpen ? 'See Less' : 'See More'
                        }
                    </strong>
                </div>

            </div>


            <div className='d-flex flex-column align-items-start justify-content-start my-3'>
                <a href="https://pinterest.com" className='my-2'>
                    <img width={18} src="/assets/images/pinterest_logo.svg" alt="Logo of Pinterest, go to Pure Vibes pinterest profile" />    
                </a>
                <small className='fw-lighter text-center'>
                    © Dharma 2022
                </small>
            </div>

            {
                isLoading && (
                    <Loading />
                )
            }

        </DashboardMenuContainter>
    )
}