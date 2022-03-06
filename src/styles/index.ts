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
        list-style-type: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    input[type="text"], input[type="number"], input[type="password"], input[type="email"], textarea {
        border: none;
        border-bottom: 2px solid var(--color-dark);
        padding: 6px 0;
        width: 100%;
        outline: none;
        max-width: 100%;
        font-size: 15px;
    }

    textarea {
        background-color: rgba(0,0,0,.06);
        padding: 12px;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }
`