import Axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { UserData } from '../types'
import { useNavigate } from 'react-router-dom'


type LoginCredentials = {
    email: string
    password: string
}

type signUpCredentials = {
    name: string
    email: string
    password: string
}

type UserContextType = {
    userData: UserData | null;
    login: (credentials: LoginCredentials) => void
    logout: () => void
    signUp: (credentials: signUpCredentials) => void
}

const UserContext = createContext<UserContextType>({
    userData: null,
    login: () => { },
    logout: () => { },
    signUp: () => { }
})

type UserProviderProps = {
    children: React.ReactNode
}

export const useUserContext = () => useContext(UserContext)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [token, setToken] = useLocalStorage<string | null>("user-token", null)
    const [userData, setUserData] = useState(null)

    const navigate = useNavigate()

    const login = async (credentials: LoginCredentials) => {
        try {
            const { data: { token, ...user } } = await Axios.post('/api/users/login', credentials)
            setToken(token)
            setUserData(user)
            navigate("/store")
        } catch (err) {
            alert("您輸入的信箱或是密碼錯誤")
        }
    }

    const logout = () => {
        setToken(null)
        setUserData(null)
        navigate("/store")
    }

    const signUp = async (credentials: signUpCredentials) => {
        try {
            const { data: {token, ...user } } = await Axios.post('/api/users/signup', credentials)
            navigate("/login")
        } catch (err) {
            console.log(err)
        }
    }

    const contextValue: UserContextType = {
        userData,
        login,
        logout,
        signUp
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) return;
                const { data } = await Axios.post('/api/users/login-with-token', { token })
                setUserData(data)
            } catch (err) {
                setToken(null)
                alert("登入時效已過 請重新登入")
            }
        }

        fetchData()
    }, [])

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}