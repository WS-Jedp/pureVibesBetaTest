import styled from 'styled-components'

export const PureVibesButton = styled.button`
    min-width: 210px;
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

export const PureVibesButtonAlternative = styled.button`
    min-width: 240px;
    width: auto;
    max-width: 330px;
    border-radius: 9px;
    font-weight: 500;
    background-color: var(--color-dark);
    color: var(--color-light);
    padding: 9px;
    border: 1px solid var(--color-light);
    margin: 6px;
    transition: .4s ease-in-out;
    box-shadow: -12px 8px 30px 3px rgba(255, 255, 255, .1);
    outline: none;

    &:hover {
        box-shadow: -12px 8px 30px 6px rgba(255, 255, 255, .1);
        opacity: .8;
    }

    &:active {
        background-color: var(--color-light);
        color: var(--color-dark);
        opacity: 1;
    }
`

export const InlineButton = styled.button`
    background-color: transparent;
    color: var(--color-dark);
    outline: none;
    font-weight: 600;
    border: none;
    margin: 9px;
`