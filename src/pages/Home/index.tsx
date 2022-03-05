import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services/auth'

export const Home: React.FC = () => {

    useEffect(() => {
        const getData = async () => {
            await AuthServices.get.csrf()
        }
        getData()
    }, [])

    return (
        <section>
            <p>
                Hello from home
            </p>

            <Link to='/login'>
                Go to login
            </Link>

        </section>
    )
}