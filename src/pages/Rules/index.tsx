import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { BsCardChecklist, BsFillAwardFill } from 'react-icons/bs'

import { DashboardLayout } from '../../layouts/dashboard'

import { PureVibesButton } from '../../components/button'

import { InformationCard } from '../../components/cards/information'

import { Modal } from '../../components/modal'
import { DetailModal } from '../../components/modal/detailModal'
import { SimpleModal } from '../../components/modal/simpleModal'

import { RESPONSABILITIES_TEXT, RAFFLE_RULES_TEXT } from '../../utils/text'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store' 
import { termsOfUseReducer, acceptRules, acceptResponsabilites, TermsOfUseState } from '../../store/termsOfUse'
import { KEY_LOCALSTORAGE_RESPONSABILITIES, KEY_LOCALSTORAGE_RULES } from '../../store/termsOfUse/types'

export const Rules: React.FC = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const termsOfUse = useSelector<RootState, TermsOfUseState>(state => state.termsOfUse)

    const [isBothTermsAccepted, setIsBothTermsAccepted] = useState<boolean>(false)
    // Verify if the rules and responsabilites are already accepted
    useEffect(() => {

        if(termsOfUse.rules && termsOfUse.responsabilities) ( setIsBothTermsAccepted(true) )

    }, [termsOfUse.rules, termsOfUse.responsabilities])

    const [ isOpenResponsabilitiesModal, setIsOpenResponsabilitiesModal ] = useState<boolean>(false)
    const [ isOpenRulesModal, setIsOpenRulesModal ] = useState<boolean>(false)

    const handleResponsabilitiesModal = () => {
        localStorage.setItem(KEY_LOCALSTORAGE_RESPONSABILITIES, 'true')
        dispatch(acceptResponsabilites())
        setIsOpenResponsabilitiesModal(false)
    }
    const handleRulesModal = () => {
        localStorage.setItem(KEY_LOCALSTORAGE_RULES, 'true')
        dispatch(acceptRules())
        setIsOpenRulesModal(false)
    }

    function handleContinueAction() {
        navigate('/home')
    }
    

    return (
        <DashboardLayout withGoBack>
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
                    onClick={() => setIsOpenResponsabilitiesModal(true)}
                    isDone={termsOfUse.responsabilities}
                />
                <InformationCard 
                    Icon={BsFillAwardFill}
                    title="Raffle Rules/Prize"
                    description="Everything you need to know"
                    onClick={() => setIsOpenRulesModal(true)}
                    isDone={termsOfUse.rules}
                />
            </Row>

            {
                isBothTermsAccepted && (
                    <PureVibesButton 
                        text='Continue'
                        action={handleContinueAction}
                    />
                )
            }

            {
                isOpenResponsabilitiesModal && (
                    <Modal>
                        <DetailModal
                            title="Responsibilities as a Beta Tester are as:"
                            onAgree={handleResponsabilitiesModal}
                            onClose={() => setIsOpenResponsabilitiesModal(false)}
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
                            onAgree={handleRulesModal}
                            onClose={() => setIsOpenRulesModal(false)}
                        >
                            <RAFFLE_RULES_TEXT />    
                        </DetailModal>
                    </Modal>
                )
            }
        </DashboardLayout>
    )
}