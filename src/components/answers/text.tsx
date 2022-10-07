import React, { useRef, useEffect } from 'react'

interface TextOptionAnswer {
    setState: React.Dispatch<React.SetStateAction<string>>
    defaultValue?: string
}

export const Text:React.FC<TextOptionAnswer> = ({ setState, defaultValue }) => {
    const el = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        if(el.current) {
            const length = el.current.value.length
            el.current.focus()
            el.current.setSelectionRange(length, length)
        }
    }, [])
    return (
        <article>
            <textarea 
                ref={el}
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

export const TextEmptyValue:React.FC<TextOptionAnswer> = ({ setState }) => {
    const el = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        if(el.current) {
            const length = el.current.value.length
            el.current.focus()
            el.current.setSelectionRange(length, length)
        }
    }, [])
    return (
        <article>
            <textarea
                ref={el}
                name="text"
                id="text"
                cols={42}
                rows={4}
                placeholder="Write your answer here"
                className='w-100'
                onChange={(ev) => setState(ev.currentTarget.value)}
                defaultValue={null}
            >
            </textarea>
        </article>
    )
}