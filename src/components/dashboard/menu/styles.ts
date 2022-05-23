import styled from 'styled-components'

export const DashboardMenuContainter = styled.article`
display: flex;
position: relative;
width: 100%;
height: 100%;
background-color: var(--color-dark);
color: var(--color-light);
box-shadow: 0 0 30px 21px rgba(0, 0, 0, .3);

@media (min-width: 720px) {
    height: 100%;
    max-height: auto;   
    .menu-action {
        display: none;
    }
}

.menu-options {
    transition: .6s ease-in-out;
}


.is-close {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 0;
    
    @media (min-width: 720px) {
        height: 100%;
    }

}

.is-open {
    height: auto;
}
`


export const QuickLinks = styled.ul`
color: var(--color-light);

& li > * {
    color: var(--color-light);
    text-decoration: underline !important;
}
`