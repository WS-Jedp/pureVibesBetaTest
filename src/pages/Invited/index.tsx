import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Collapse } from 'reactstrap'

import { PureVibesButton } from '../../components/button'
import { DashboardLayout } from '../../layouts/dashboard'
import { ToogleOption } from './styles'

export const Invited:React.FC = () => {

    const [ searchParams ] = useSearchParams()
    const navigate = useNavigate()
    const [ isTester, setIsTester ] = useState<boolean>(false)

    useEffect(() => {
        const token = searchParams.get('token')

        if(!token) {
            navigate('/login')
        }

        // Handle logic to authenticate the user
    }, [])


    return (
        <DashboardLayout>
            <h2 className='fw-bolder fs-2'>
                Congratulations, you have been referred by a friend to participate!🎉                
            </h2>
            <p className='fs-6 fw-normal my-3'>
                Welcome and thank you for being a part of the BETA testing phase of the Dharma App.
            </p>
            <p>
                First, you must select an option, then agree to the Terms of Use.  
            </p>

            <ToogleOption>
                <label htmlFor="guest" className='w-100 d-flex flex-row align-items-center justify-content-start'>
                    <strong>
                        Option 1 - Invited
                    </strong>
                    <input type="radio" name="userType" id="guest" className='mx-2'  onClick={() => setIsTester(false)}/>
                </label>

                <Collapse isOpen={!isTester}>
                    <p>
                        Download Testflight on the iOS App Store.
                    </p>

                    <ol>
                        <li>
                            1. You will be required to book and complete one session using the Dharma App. Sessions options are: SOUND HEALING, REIKI, OR MINDFUL MASSAGE.
                        </li>
                        <li>
                            2. We will give you a 15% discount for your first booking!!
                        </li>
                        <li>
                            3. After the session you must leave an in-app review. 
                        </li>
                    </ol>

                    <p>
                        If you select and complete Option 1, we will be notified when you make and complete a booking through the app.
                    </p>

                    <p>
                        If you have any questions, feel free to reach out at info@mydharma.app
                    </p>
                </Collapse>
            </ToogleOption>

            <ToogleOption>
                <label htmlFor="tester" className='w-100 d-flex flex-row align-items-center justify-content-start'>
                    <strong>
                        Option 2 - Full beta tester
                    </strong>
                    <input type="radio" name="userType" id="tester" className='mx-2' onClick={() => setIsTester(true)}/>
                </label>
                <Collapse isOpen={isTester}>
                    <p>
                        Become a Full Beta Tester and be eligible for <strong>100, 200, or 500 USD cash prize!!</strong>
                    </p>

                    <strong>
                        What does it mean to be a Full Beta Tester?
                    </strong>

                    <ol>
                        <li className='my-2'>
                           <strong>
                                1. Answer questions about your experience using the app.
                                We will provide you with access to an <span className='fw-bold text-success text-uppercase'>interactive questionnaire.</span>
                            </strong> 
                        </li>
                        <li className='my-2'>
                            <strong>
                                2. After each completed session booked through the app, you must leave an <span className='fw-bold text-uppercase text-success'>In-App review—</span> rating the experience and leaving a few details about your session.  
                            </strong>
                        </li>
                        <li className='my-2'>
                            <strong>
                                3. Use the app to <span className='fw-bold text-uppercase text-success'>make a booking at least twice:</span> 
                                You will receive a 10% off discount for both bookings. 
                            </strong>
                        </li>
                        <li className='my-2'>
                            <strong>
                                4. After beta-testing has ended, Testers who have successfully met our requirements will be entered into a <span className='fw-bold text-uppercase text-success'></span> 
                            </strong>
                        </li>
                        <li className='my-2'>
                            <strong>
                                5. Beta Testers will have the opportunity to earn multiple raffle tickets by submitting friend referrals. You can submit your friend's email using the Friend Referral Tab located on the Home page.
                            </strong>
                        </li>
                    </ol>



                </Collapse>
            </ToogleOption>

            <PureVibesButton 
                text='Start'
                action={() => {}}
            />
        </DashboardLayout>
    )
}