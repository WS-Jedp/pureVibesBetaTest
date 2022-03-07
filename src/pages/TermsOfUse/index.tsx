import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { MdLockOutline, MdOutlineTextSnippet } from 'react-icons/md'

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

    function handleTermsAndConditions() {
        // Logic for accept terms and conditions, save it in local storage and redux store
        setIsTermsAndConditionsModalOpen(false)
    }

    function handlePrivacyPolicy() {
        // Logic for accept privacy policy, save it in local storage and redux store
        setIsPrivacyPolicyModal(false)
    }

    function handleNonDisclosure() {
        // Logic for non disclosure, save it in local storage and redux store
        setIsNonClosureModalOpen(false)
    }


    return (
        <DashboardLayout withGoBack>
            <Row className='my-4'>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Terms And Conditions"
                        Icon={MdOutlineTextSnippet}
                        onAction={() => setIsTermsAndConditionsModalOpen(true)}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Privacy Policy"
                        Icon={MdLockOutline}
                        onAction={() => setIsPrivacyPolicyModal(true)}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Non Closure"
                        Icon={MdLockOutline}
                        onAction={() => setIsNonClosureModalOpen(true)}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                    />
                </Col>
            </Row>

            {
                isTermsAndConditionsModalOpen && (
                    <Modal>
                        <DetailModal
                            onAgree={handleTermsAndConditions}
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
                            onAgree={handlePrivacyPolicy}
                            onClose={() => setIsPrivacyPolicyModal(false)}
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
                            onAgree={handleNonDisclosure}
                            onClose={() => setIsNonClosureModalOpen(false)}
                            title="Non-disclosure Agreement"
                        >
                            <NonClosure />
                        </DetailModal>
                    </Modal>
                )
            }

        </DashboardLayout>
    )
}