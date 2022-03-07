import styled from 'styled-components'

export const DetailModalContainer = styled.article`
    position: relative;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    max-width: 600px;
    background-color: var(--color-light);
    border-radius: 9px;
    height: 420px;


    & h2 {
        border-bottom: 4px solid var(--color-dark);
    }

    & .detail-modal {

        &-content {
            overflow: auto;
            height: 220px;
        }

        &-actions {
            position: sticky;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 6px;
            box-shadow: 0 -6px 12px 6px rgba(0,0,0,.12);
        }
    }
`