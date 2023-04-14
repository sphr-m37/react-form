import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = ({  children }) => {
    const login = JSON.parse(localStorage.getItem('admin'))
    const location = useLocation()
    if (login) {
         return (
        children ? children : <Outlet />
    )
    }return <Navigate to='/login' state={location} />
   
}