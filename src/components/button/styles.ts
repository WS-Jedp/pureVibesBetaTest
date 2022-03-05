import styled from 'styled-components'

export const PureVibesButton = styled.button`
    min-width: 240px;
    width: auto;
    max-width: 330px;
    border-radius: 9px;
    color: var(--color-light);
    font-weight: bold;
    background: linear-gradient(to right, var(--color-dark-blue), var(--color-light-blue));
    padding: 9px;
    border: none;
    margin: 6px;
    transition: .4s ease-in-out;
    box-shadow: -12px 8px 42px 12px rgba(75, 115, 196, .49);
    outline: none;

    &:hover {
        box-shadow: -12px 8px 36px 12px rgba(75, 115, 196, .5);
        opacity: .8;
    }

    &:active {
        box-shadow: -12px 8px 36px 12px rgba(75, 115, 196, .6);
        opacity: 1;
    }
`