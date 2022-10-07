import styled from 'styled-components'

export const ToogleOption = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    padding: 9px;
    border-radius: 9px;
    box-shadow: 0 0 12px 3px rgba(0,0,0, .3);
    background-color: var(--color-light);
    margin: 12px;

    & > label {
        border-bottom: 3px solid var(--color-dark);
        padding-bottom: 9px;
    }
`