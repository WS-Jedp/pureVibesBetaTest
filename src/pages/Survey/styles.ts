import styled from 'styled-components'

export const ImagesContainer = styled.article`
    position: relative;
    margin-bottom: 21px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: auto;
    overflow: auto;

    @media (min-width: 600px) {
        position: absolute;
        margin-bottom: initial;
    }
`

export const AppImageExampleContainer = styled.article`
    position: relative;
    min-width: 210px;
    width: 210px;
    max-width: 210px;
    min-height: 360px;
    height: 360px;
    max-height: 360px;
    object-fit: cover;
    box-shadow: -12px 30px 30px 12px rgba(0,0,0,.31);
    overflow: hidden;
    border-radius: 12px;
    background-color: var(--color-light);
    margin: 0 12px;
    z-index: 999;

    & img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`