import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '@/entities/user';
import type { AuthState } from '@/features/auth';
import { refreshAccessToken } from '@/features/auth/model/useAuth';
import { getAccessToken } from '@/shared/api';

// 1. Define what data/function the context provides
interface AuthContextType extends AuthState {
    setUser: (user: User | null) => void; // Function to update user
    logout: () => void; // Function to logout
}

// 2. Create the context (like creating a "storage box")
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Create the provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to track user and loading status
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is already logged in when app starts
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // If we have a token, try to refresh it
                if (getAccessToken()) {
                    await refreshAccessToken();
                    // In real app, you'd fetch user data here
                    // For now, we'll handle this in the login flow
                }
            } catch (error) {
                console.error('Auth check failed', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Logout function
    const handleLogout = () => {
        setUser(null);
    };

    // 4. Provide the data to all children components
    return (
        <AuthContext.Provider
        value={{
            user,
            isAuthenticated: !!user,
            isLoading,
            setUser,
            logout: handleLogout,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// 5. Custom hook to use auth in any component
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}