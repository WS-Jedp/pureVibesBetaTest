import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login'  element={<Login isAuth />} />
                <Route path='/'  element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}