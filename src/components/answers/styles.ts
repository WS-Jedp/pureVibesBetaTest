import styled from 'styled-components'

export const RateOptionsContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & > label > span {
        position: absolute;
        cursor: pointer;
        top: -21px;
        font-size: 15px;
    }

    & > label > input {
        cursor: pointer;
    } 
`

export const LabelOptionController = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`