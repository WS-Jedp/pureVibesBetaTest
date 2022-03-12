import styled, { keyframes } from 'styled-components'

export const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    width: 60px;
    height: 60px;
    background-color: transparent;
    border-radius: 100%;
    border: 6px solid var(--color-light-blue);
    animation: ${loaderAnimation} .9s linear infinite;
    border-bottom: 6px solid transparent;
`

