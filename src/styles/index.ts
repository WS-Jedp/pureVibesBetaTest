import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-dark: #101217;
        --color-light: #FFFFFF;
        --color-dark-blue: #4B73C4;
        --color-light-blue: #78FFD5;
    }


    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
`