import styled from 'styled-components'

export const DashboardLayoutContainer = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: var(--color-light);
    margin: 0;
    padding: 0;

    @media (min-width: 600px) {
        overflow: auto;
    }
`

export const GoBackButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none
`