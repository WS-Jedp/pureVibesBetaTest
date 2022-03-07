import React from 'react'
import { RateOptionsContainer } from './styles'

interface RateOptionAnswer {
    setState: React.SetStateAction<number>
}

export const Rate:React.FC<RateOptionAnswer> = ({ setState }) => {

    const RATE_AMOUNT = [1,2,3,4,5]

    return (
        <article className='d-flex flex-row align-items-center justify-content-center'>
            
            <span className='fs-6 fw-normal mx-2'>
                Bad
            </span>
            <div className='d-flex flex-row align-items-center justify-content-center'>
                {
                    RATE_AMOUNT.map((rate) => (
                        <RateOptionsContainer key={rate} className='mx-2'>
                            <label htmlFor={`rate-${rate}`}>
                                <span className='fw-bold'>
                                        {rate}
                                </span>
                                <input type="radio" name="rate" value={rate} id={`rate-${rate}`} />
                            </label>
                        </RateOptionsContainer>
                    ))
                }
            </div>
            <span className='fs-6 fw-normal mx-2'>
                Good
            </span>
        </article>
    )
}