import React from 'react'
import { IconType } from 'react-icons'
import { BsArrowRightShort, BsCheckCircle } from 'react-icons/bs'
import { Row, Col } from 'reactstrap'
import { InformationCardContainer } from './styles'

interface InformationCardProps {
    Icon: IconType
    title: string
    description: string
    isDone?: boolean
    onClick: Function
}

export const InformationCard: React.FC<InformationCardProps> = ({ Icon, description, title, isDone, onClick }) => {

    return (
        <InformationCardContainer isDone={isDone} onClick={() => onClick()}>
            <Row className='m-0 p-0'>
                <Col xs="2" className='d-flex align-items-center justify-content-center information-card-icon'>
                    {
                        isDone ? (
                            <BsCheckCircle size={24} />
                        ) : (
                            <Icon size={24} /> 
                        )
                    }
                </Col>
                <Col xs="8" className='d-flex flex-column align-items-start m-0 p-0'>
                    <strong>{title}</strong>    
                    <small>{description}</small>    
                </Col>
                <Col xs="2" className='d-flex align-items-center justify-content-center'>
                    <BsArrowRightShort size={30} />
                </Col>
            </Row>
        </InformationCardContainer>
    )
}