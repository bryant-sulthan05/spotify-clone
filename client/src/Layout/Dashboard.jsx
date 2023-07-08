import React from 'react'
import { useAuth } from './useAuth'
import { Container } from 'react-bootstrap'

export const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)
    return (
        <Container>
            {code}
        </Container>
    )
}
