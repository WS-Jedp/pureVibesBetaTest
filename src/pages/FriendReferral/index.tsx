import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { DashboardLayout } from '../../layouts/dashboard'

import { PureVibesButton } from '../../components/button'
import { Modal } from '../../components/modal'
import { SimpleModal } from '../../components/modal/simpleModal'

export const FriendReferral: React.FC = () => {

    const [friendInvited, setFriendInvited] = useState<boolean>(false)

    const handleInvitation = () => {
        // Logic for handle invitation service
        setFriendInvited(true)
    }

    return (
        <DashboardLayout>
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

            <Row className='d-flex align-items-center justify-content-between my-4'>

                <Col xs="12" md="6">
                    <label htmlFor="name" className='w-100'>
                        <span className='fw-bold'>
                            Name:
                        </span>
                        <input type="text" name="name" id="name" placeholder='Write the name of your friend' />    
                    </label>
                </Col>

                <Col xs="12" md="6">
                <label htmlFor="name" className='w-100'>
                        <span className='fw-bold'>
                            Email:
                        </span>
                        <input type="text" name="name" id="name" placeholder='Write the name of your friend' />    
                    </label>
                </Col>


            </Row>

            <PureVibesButton 
                text='Invite'
                action={handleInvitation}
            />
            {
                friendInvited && (
                    <Modal>
                        <SimpleModal
                            title='Congratulations, you have referred a friend to participate! 🎉'
                            content='If they use the app to complete one booking, you will be rewarded with another raffle entry!!'
                            onAction={() => setFriendInvited(false)}
                            actionText="Accept"
                        ></SimpleModal>
                    </Modal>
                )
            }


        </DashboardLayout>
    )
}