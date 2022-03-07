import React from 'react'
import { LabelOptionController } from './styles'

interface BooleanOptionAnswer {
    setState: React.SetStateAction<Boolean>
}

export const Boolean:React.FC<BooleanOptionAnswer> = ({ setState }) => {

    return (
        <article className='d-flex flex-row align-items-center justify-content-center'>
            <LabelOptionController htmlFor='yes' className='mx-4'>
                <span className='fw-bold my-2'>
                    Yes
                </span>
                <input type="radio" name="boolean" id='yes' value={1} />
            </LabelOptionController>
            <LabelOptionController htmlFor='no' className='mx-4'>
                <span className='fw-bold my-2'>
                    No
                </span>
                <input type="radio" name="boolean" id='no' value={0} />
            </LabelOptionController>
            
        </article>
    )
}