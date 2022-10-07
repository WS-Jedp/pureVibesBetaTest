import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Row, Col, Alert } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { inviteFriend } from '../../store/user'
import { KEY_LOCALSTORAGE_INVITE_FRIEND } from '../../store/user/types'

import { InvitationServices } from '../../services/invitation'

import { DashboardLayout } from '../../layouts/dashboard'
import { Loading } from '../../containers/loading'

import { Modal } from '../../components/modal'
import { SimpleModal } from '../../components/modal/simpleModal'
import { PureVibesButton } from '../../components/button'
import { RootState } from '../../store'


interface InviteFriendForm {
    email: string
    name: string
}

export const FriendReferral: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userID = useSelector<RootState, number>(state => state.user.user.id)

    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm<InviteFriendForm>()

    const [friendInvited, setFriendInvited] = useState<boolean>(false)
    const [isError, setIsError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleInvitation = async (data: InviteFriendForm) => {
        setIsLoading(true)
        const invitationResp = await InvitationServices.post.invitePerson({ 
            ...data,
            authUser: userID
         })

        if(invitationResp.error) {
            console.error("We sorry, your friend couldn't be invited")
            setIsError("We sorry, your friend couldn't be invited 😔")
            setIsLoading(false)
            return
        }

        localStorage.setItem(KEY_LOCALSTORAGE_INVITE_FRIEND, 'true')
        dispatch(inviteFriend())
        setFriendInvited(true)
        setIsLoading(false)
    }

    return (
        <DashboardLayout withGoBack>
            {
                isError && (
                    <Alert color='danger' toggle={() => setIsError(null)}>
                        <p className='fs-5 fw-bold'>
                            { isError }
                        </p>
                        <hr />
                        <small className='fw-normal'>
                            Maybe, your friend is already invited!
                        </small>
                    </Alert>
                )
            }
            <h2 className='fw-bolder fs-1'>Friend Referral</h2>
            <p className='fs-6 fw-normal'>
                Your friend will need to <span className='fw-bold'>use the app once</span> by scheduling and completing a booking and leave an in-app review in order for you to qualify. 
            </p>
            <p>
                If your friend wants to be added to the raffle, they must book through the app twice and complete the same Beta Tester Requirements as you. 
            </p>

            <p>
                *Note: your referral must be able to download the app using <span className='fw-bold'>TestFlight</span> on the Apple App Store. 
            </p>


            <form onSubmit={handleSubmit(handleInvitation)}>
                <Row className='d-flex align-items-center justify-content-between my-4'>

                    <Col xs="12" md="6">
                        <label htmlFor="name" className='w-100'>
                            <span className='fw-bold'>
                                Name:
                            </span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Write the name of your friend'
                                {...register('name', { required: true, minLength: 2 })}
                            />
                        </label>
                    </Col>

                    <Col xs="12" md="6">
                    <label htmlFor="email" className='w-100'>
                            <span className='fw-bold'>
                                Email:
                            </span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Write the email of your friend'
                                {...register('email', { required: true, minLength: 5 })}
                            />
                        </label>
                    </Col>

                </Row>

                <PureVibesButton 
                    text='Invite'
                    isFormButton
                    isDisable={!dirtyFields.email || !dirtyFields.name}

            />
            </form>

            {
                friendInvited && (
                    <Modal>
                        <SimpleModal
                            title='Congratulations, you have referred a friend to participate! 🎉'
                            content='If they use the app to complete one booking, you will be rewarded with another raffle entry!!'
                            onAction={() => navigate('/home')}
                            actionText="Accept"
                        ></SimpleModal>
                    </Modal>
                )
            }

            {
                isLoading && (
                    <Loading></Loading>
                )
            }


        </DashboardLayout>
    )
}