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
        background-color: transparent;
    }

    textarea {
        background-color: rgba(0,0,0,.06);
        padding: 12px;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }


    /* SCROLL STYLES */
    /* width */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,.12);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,.6);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-dark-blue);
    }
`