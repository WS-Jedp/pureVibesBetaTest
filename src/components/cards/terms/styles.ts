import styled from 'styled-components'

interface TermsCardContainerProps {
    isDone?: boolean
}

export const TermsCardContainer = styled.article<TermsCardContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-radius: 9px;
    min-width: 210px;
    width: 100%;
    max-width: 240px;
    height: 330px;
    border: 3px solid ${props => props.isDone ? '#4BC457' : 'transparent'};
    box-shadow: 0 0 15px 9px rgba(0,0,0,.21);
    padding: 21px;
    transition: .3s ease-in-out;

    ${props => props.isDone && ('color: #4BC457;')}

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 21px 9px rgba(0,0,0,.21);
    }
`