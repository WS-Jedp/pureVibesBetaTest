import React from 'react'

interface TextOptionAnswer {
    setState: React.Dispatch<React.SetStateAction<string>>
    defaultValue?: string
}

export const Text:React.FC<TextOptionAnswer> = ({ setState, defaultValue }) => {

    return (
        <article>
            <textarea 
                name="text"
                id="text"
                cols={42}
                rows={4}
                placeholder="Write your answer here"
                className='w-100'
                onChange={(ev) => setState(ev.currentTarget.value)}
                defaultValue={defaultValue}
            >
            </textarea>
        </article>
    )
}