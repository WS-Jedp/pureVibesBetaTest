import styled from 'styled-components'

export const SimpleModalContainer = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 300px;
    width: 66%;
    max-width: 540px;
    min-height: 210px;
    height: auto;
    overflow: hidden;
    
    background-color: var(--color-light );
    border-radius: 9px;

    & .simple-modal {
        &-actions {
            position: sticky;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 6px;
            box-shadow: 0 -6px 12px 6px rgba(0,0,0,.12);
            background-color: var(--color-light);
        }
    }
`