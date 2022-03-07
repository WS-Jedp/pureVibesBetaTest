import React from 'react'

interface TextOptionAnswer {
    setState: React.SetStateAction<string>
}

export const Text:React.FC<TextOptionAnswer> = ({ setState }) => {

    return (
        <article>
            <textarea 
                name="text"
                id="text"
                cols={42}
                rows={4}
                placeholder="Write your answer here"
                className='w-100'
            >
            </textarea>
        </article>
    )
}