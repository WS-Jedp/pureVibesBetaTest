import styled from 'styled-components'

export const DashboardMenuContainter = styled.article`
display: flex;
position: relative;
width: 100%;
height: 100%;
background-color: var(--color-dark);
color: var(--color-light);
box-shadow: 0 0 30px 21px rgba(0, 0, 0, .3);
`


export const QuickLinks = styled.ul`
color: var(--color-light);

& li > * {
    color: var(--color-light);
    text-decoration: underline !important;
}
`