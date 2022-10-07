import React from 'react'
import { LabelOptionController } from './styles'

interface BooleanOptionAnswer {
    setState: React.Dispatch<React.SetStateAction<Boolean>>
    defaultValue?: boolean
}

export const Boolean:React.FC<BooleanOptionAnswer> = ({ setState, defaultValue }) => {

    return (
        <article className='d-flex flex-row align-items-center justify-content-center'>
            <LabelOptionController htmlFor='yes' className='mx-4'>
                <span className='fw-bold my-2'>
                    Yes
                </span>
                <input type="radio" name="boolean" id='yes' value={1} onChange={() => setState(true)} defaultChecked={defaultValue} />
            </LabelOptionController>
            <LabelOptionController htmlFor='no' className='mx-4'>
                <span className='fw-bold my-2'>
                    No
                </span>
                <input type="radio" name="boolean" id='no' value={0} onChange={() => setState(false)} defaultChecked={typeof defaultValue === 'boolean' ? !defaultValue : false} />
            </LabelOptionController>
            
        </article>
    )
}