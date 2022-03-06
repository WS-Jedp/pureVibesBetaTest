import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { BsCardChecklist, BsFillAwardFill } from 'react-icons/bs'

import { DashboardLayout } from '../../layouts/dashboard'

import { PureVibesButton } from '../../components/button'

import { InformationCard } from '../../components/cards/information'

import { Modal } from '../../components/modal'
import { DetailModal } from '../../components/modal/detailModal'
import { SimpleModal } from '../../components/modal/simpleModal'

import { RESPONSABILITIES_TEXT, RAFFLE_RULES_TEXT } from '../../utils/text'

export const Rules: React.FC = () => {

    const [ isOpenResponsabilitiesModal, setIsOpenResponsabilitiesModal ] = useState<boolean>(false)
    const [ isOpenRulesModal, setIsOpenRulesModal ] = useState<boolean>(false)

    const handleResponsabilitiesModal = () => setIsOpenResponsabilitiesModal(!isOpenResponsabilitiesModal)
    const handleRulesModal = () => setIsOpenRulesModal(!isOpenRulesModal)
    

    return (
        <DashboardLayout>
            <h2 className='fw-bolder fs-1'>Rules</h2>
            <p className='fs-6 fw-normal'>
                Welcome and thank you for being a part of the BETA testing phase of the Dharma App!
            </p>
            <p>
                This section will cover the responsibilities/requirements of being a tester.
            </p>

            <p>
                All testers that complete the Beta Tester Requirements will be entered into a raffle for a chance to win a prize of 500 USD, 300 USD, or 100 USD!!
            </p>

            <p>
                We will hold the raffle live on ZOOM, and all Beta Testers will receive an invitation link.
            </p>

            <Row>
                <InformationCard 
                    Icon={BsCardChecklist}
                    title="Responsabilites"
                    description="Everything you need to know"
                    isDone
                />
                <InformationCard 
                    Icon={BsFillAwardFill}
                    title="Raffle Rules/Prize"
                    description="Everything you need to know"
                />
            </Row>

            {
                isOpenResponsabilitiesModal && (
                    <Modal>
                        <DetailModal
                            title="Responsibilities as a Beta Tester are as:"
                            onAgree={() => {}}
                            onClose={() => {}}
                        >
                            <RESPONSABILITIES_TEXT />    
                        </DetailModal>
                    </Modal>
                )
            }

            {
                isOpenRulesModal && (
                    <Modal>
                        <DetailModal
                            title="Raffle Rules and Prize Information"
                            onAgree={() => {}}
                            onClose={() => {}}
                        >
                            <RAFFLE_RULES_TEXT />    
                        </DetailModal>
                    </Modal>
                )
            }
        </DashboardLayout>
    )
}