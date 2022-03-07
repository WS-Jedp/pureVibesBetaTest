import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { BsCardText, BsLock, BsFillFileLock2Fill} from 'react-icons/bs'

import { TermsAndConditionText } from '../../utils/terms'
import { PrivacyPolicy } from '../../utils/privacyPolicy'
import { NonClosure } from '../../utils/NonClosure'

import { DashboardLayout } from '../../layouts/dashboard'
import { Modal } from '../../components/modal'
import { DetailModal } from '../../components/modal/detailModal'
import { TermsCard } from '../../components/cards/terms'

export const TermsOfUse:React.FC = () => {

    const [ isTermsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen ] = useState<boolean>(false)
    const [ isPrivacyPolicyModal, setIsPrivacyPolicyModal ] = useState<boolean>(false) 
    const [ isNonClosureModalOpen, setIsNonClosureModalOpen ] = useState<boolean>(false) 

    return (
        <DashboardLayout withGoBack>
            

            <Row>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Terms And Conditions"
                        Icon={BsCardText}
                        onAction={() => {}}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Privacy Policy"
                        Icon={BsLock}
                        onAction={() => {}}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Non Closure"
                        Icon={BsFillFileLock2Fill}
                        onAction={() => {}}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
            </Row>

            {
                isTermsAndConditionsModalOpen && (
                    <Modal>
                        <DetailModal
                            onAgree={() => {}}
                            onClose={() => setIsTermsAndConditionsModalOpen(false)}
                            title="Terms And Conditions"
                        >
                            <TermsAndConditionText />
                        </DetailModal>
                    </Modal>
                )
            }

            {
                isPrivacyPolicyModal && (
                    <Modal>
                        <DetailModal
                            onAgree={() => {}}
                            onClose={() => {}}
                            title="Privacy Policy"
                        >
                            <PrivacyPolicy />
                        </DetailModal>
                    </Modal>
                )
            }

            {
                isNonClosureModalOpen && (
                    <Modal>
                        <DetailModal
                            onAgree={() => {}}
                            onClose={() => {}}
                            title="Non-disclosure Agreement "
                        >
                            <NonClosure />
                        </DetailModal>
                    </Modal>
                )
            }

        </DashboardLayout>
    )
}