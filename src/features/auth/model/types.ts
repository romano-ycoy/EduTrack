import type { User } from '@/entities/user';

// What we send to the backend when logging in
export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

// What we send when registering a new admin
export interface RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

// The authentication state in our app
export interface AuthState {
    user: User | null;        // Current logged-in user
    isAuthenticated: boolean; // Are they logged in?
    isLoading: boolean;       // Are we checking/loading?
}