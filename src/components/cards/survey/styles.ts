import styled from 'styled-components'

interface SurveyCardContainerProps {
    isDone: boolean
    isDisable?: boolean
}

export const SurveyCardContainer = styled.article<SurveyCardContainerProps>`
    min-width: 300px;
    width: 90%;
    max-width: 420px;
    box-shadow: 0 0 15px 6px rgba(0,0,0, .15);
    border-radius: 6px;
    cursor: ${props => props.isDisable ? 'default' : 'pointer'};
    margin: 12px 0;
    overflow: hidden;
    height: 81px;

    & .survey-card-state {
        background-color: ${props => props.isDone ? `var(--color-dark-blue)` : `rgba(0,0,0,.2)`};
    }

    opacity: ${props => props.isDisable ? '.3' : '1'};
`