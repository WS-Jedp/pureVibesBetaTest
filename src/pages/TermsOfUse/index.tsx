import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { MdLockOutline, MdOutlineTextSnippet } from 'react-icons/md'

import { TermsAndConditionText } from '../../utils/terms'
import { PrivacyPolicy } from '../../utils/privacyPolicy'
import { NonClosure } from '../../utils/NonClosure'

import { DashboardLayout } from '../../layouts/dashboard'
import { Modal } from '../../components/modal'
import { DetailModal } from '../../components/modal/detailModal'
import { TermsCard } from '../../components/cards/terms'
import { PureVibesButton } from '../../components/button'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { TermsOfUseState, acceptNonClosure, acceptPrivacyPolicy, acceptTermsAndConditios } from '../../store/termsOfUse'
import { KEY_LOCALSTORAGE_PRIVACY_POLICY, KEY_LOCALSTORAGE_NON_CLOSURE, KEY_LOCALSTORAGE_TERMS_AND_CONDITIONS  } from '../../store/termsOfUse/types'

export const TermsOfUse:React.FC = () => {

    const termsOfUse = useSelector<RootState, TermsOfUseState>(state => state.termsOfUse)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const [ isAllThreeTermsOfUseAccepted, setIsAllThreeTermsOfUseAccepted ] = useState<boolean>(false)

    // Verify if all the three terms and conditions are already accepted
    useEffect(() => {

        if(termsOfUse.nonClosure && termsOfUse.nonClosure && termsOfUse.termsAndConditions) ( setIsAllThreeTermsOfUseAccepted(true) )

    }, [termsOfUse.nonClosure, termsOfUse.privacyPolicy, termsOfUse.termsAndConditions])

    const [ isTermsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen ] = useState<boolean>(false)
    const [ isPrivacyPolicyModal, setIsPrivacyPolicyModal ] = useState<boolean>(false) 
    const [ isNonClosureModalOpen, setIsNonClosureModalOpen ] = useState<boolean>(false) 

    function handleTermsAndConditions() {
        localStorage.setItem(KEY_LOCALSTORAGE_TERMS_AND_CONDITIONS, 'true')
        dispatch(acceptTermsAndConditios())
        setIsTermsAndConditionsModalOpen(false)
    }

    function handlePrivacyPolicy() {
        localStorage.setItem(KEY_LOCALSTORAGE_PRIVACY_POLICY, 'true')
        dispatch(acceptPrivacyPolicy())
        setIsPrivacyPolicyModal(false)
    }

    function handleNonDisclosure() {
        localStorage.setItem(KEY_LOCALSTORAGE_NON_CLOSURE, 'true')
        dispatch(acceptNonClosure())
        setIsNonClosureModalOpen(false)
    }

    function handleContinueAction() {
        navigate('/home')
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
                        isDone={termsOfUse.termsAndConditions}
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Privacy Policy"
                        Icon={MdLockOutline}
                        onAction={() => setIsPrivacyPolicyModal(true)}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                        isDone={termsOfUse.privacyPolicy}
                    />
                </Col>
                <Col xs="12" md="4">
                    <TermsCard
                        title="Non Disclosure"
                        Icon={MdLockOutline}
                        onAction={() => setIsNonClosureModalOpen(true)}
                        actionText="Read all"
                        isDoneTextAction="Read again"
                        isDone={termsOfUse.nonClosure}
                    />
                </Col>
            </Row>

            {
                isAllThreeTermsOfUseAccepted && (
                    <PureVibesButton 
                        action={handleContinueAction}
                        text="Continue"
                    />
                )
            }

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