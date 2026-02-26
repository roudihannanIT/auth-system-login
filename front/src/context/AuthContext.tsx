'use client'

import {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import api from '@/lib/axios';

interface AuthContextType {
    user: unknown;
    loading: boolean;
    login: (data: unknown) => Promise<void>;
    register: (data: unknown) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined> (undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await api.get('/api/profile');
                setUser(res.data.user);
            }catch(err) {
                setUser(null);
            }finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const login = async (data: unknown) => {
        const res = await api.post('/auth/login', data);
        setUser(res.data.user);
    }

    const register = async (data: unknown) => {
        const res = await api.post('/auth/register', data);
        setUser(res.data.user);
    }

    const logout = async () => {
        await api.post('/auth/logout');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, loading, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('userAuth must be used within an AuthProvider');
    return context;
}


