import styled from 'styled-components'

interface SurveyCardContainerProps {
    isDone: boolean
}

export const SurveyCardContainer = styled.article<SurveyCardContainerProps>`
    min-width: 300px;
    width: 90%;
    max-width: 420px;
    box-shadow: 0 0 15px 6px rgba(0,0,0, .15);
    border-radius: 6px;
    cursor: pointer;
    margin: 12px 0;
    overflow: hidden;

    & .survey-card-state {
        background-color: ${props => props.isDone ? `var(--color-dark-blue)` : `rgba(0,0,0,.2)`};
    }
`