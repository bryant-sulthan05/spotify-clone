import React from 'react'
import { useAuth } from './useAuth'

export const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)
    return (
        <div>{code}</div>
    )
}
