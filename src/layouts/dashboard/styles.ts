import styled from 'styled-components'

export const DashboardLayoutContainer = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    background-color: var(--color-light);
    margin: 0;
    padding: 0;


    & .dashboard-children {
        position: relative;
        overflow-y: scroll;
    }

    @media (max-width: 600px) {
        flex-direction: column !important;
        overflow: auto;
    }
`

export const GoBackButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
`

export const ImagesSurveyContainer = styled.article`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`