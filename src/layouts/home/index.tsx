import React from 'react'

export const Home:React.FC = ({ children }) => {

    return (
        <section>
            Hello form home layout

            {
                children
            }
        </section>
    )
}