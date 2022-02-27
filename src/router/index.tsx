import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login'  element={<Login isAuth />} />
            </Routes>
        </BrowserRouter>
    )
}