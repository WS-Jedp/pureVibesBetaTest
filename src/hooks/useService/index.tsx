import React, { useState, useEffect } from 'react'
import { ServiceResponse } from '../../services/response'

export interface UseServiceProps<P> {
    service: Function,
    params?: P
}

export type UserServiceResponse<T> = [
    request: () => Promise<void>,
    isLoading: boolean,
    response: T,
    isError: boolean,
    setParams?: Function,
    message?: string,

]

export function useService<T, P>({ service }:UseServiceProps<P>): UserServiceResponse<T> {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [response, setResponse] = useState<T>()
    const [message, setMessage] = useState<string | undefined>()
    const [params, setParams] = useState<P>()

    const requestWithParams = async (): Promise<ServiceResponse<T>> => await service(params) as ServiceResponse<T>
    const requestWithoutParams = async (): Promise<ServiceResponse<T>> => await service() as ServiceResponse<T>

    async function handlingService() {

        setIsLoading(true)
        let response
        if(params) {
            response = await requestWithParams()
        } else {
            response = await requestWithoutParams()
        }


        if(response.error) {
            setIsError(true)
            setMessage(response.message)
            setIsLoading(false)
            return
        }

        if(response.response) {
            setResponse(response.response)
            setMessage(response.message)
            setIsLoading(false)
        }
    }

    return [
        handlingService,
        isLoading,
        response,
        isError,
        setParams,
        message,
    ]
}