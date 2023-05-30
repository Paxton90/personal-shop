import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import React from "react";


type ProtectedRouteProps = {
    children: React.ReactNode
    admin?: boolean
}

export default function ProtectedRoute({ children, admin = false }: ProtectedRouteProps) {
    const { userData } = useUserContext()
    
    if (admin && !userData?.isAdmin) return <Navigate to="/" />

    return <>{children}</>
}