import styled from 'styled-components'

interface InformationCardContainerProps {
    isDone?: boolean
}

export const InformationCardContainer = styled.article<InformationCardContainerProps>`
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: 270px;
    width: auto;
    max-width: 390px;
    background-color: transparent;
    box-shadow: 0 0 ${props => props.isDone ? '9px 6px rgba(0,0,0,.1)' : '15px 12px rgba(0,0,0,.12)'};
    border-radius: 9px;
    padding: 9px;
    transition:  .3s ease-in-out;
    cursor: pointer;
    border: 3px solid ${props => props.isDone ? 'var(--color-dark-blue)' : 'transparent'};
    margin: 9px;

    &:hover {
        box-shadow: 0 0 21px 12px rgba(0,0,0,.2);
    }

    & .information-card-icon {
        color: ${props => props.isDone ? 'var(--color-dark-blue)' : 'black'};
    }


`