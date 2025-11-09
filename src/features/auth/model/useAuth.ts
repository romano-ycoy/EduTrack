import { apiClient, setAccessToken } from '@/shared/api';
import type { ApiResponse } from '@/shared/types';
import type { AuthTokens } from '@/entities/user';
import type { LoginCredentials, RegisterData } from '../model/types';


// Login function
export const login = async (credentials: LoginCredentials) => {
    // 1. Send POST request to /auth/login with email, password, rememberMe
    const response = await apiClient.post<ApiResponse<AuthTokens>>(
        '/auth/login',
        credentials
    );

    // 2. Extract the access token from response
    const { accessToken } = response.data.data!;

    // 3. Save the token in memory
    setAccessToken(accessToken);

    // 4. Return the response (with user data)
    return response.data;
};


// Register function
export const register = async (data: RegisterData) => {
    // 1. Send POST request to /auth/register
    const response = await apiClient.post<ApiResponse>(
        '/auth/register',
        data
    );

    // 2. Return response (user data, but no auto-login)
    return response.data;
}

// Refresh token function
export const refreshAccessToken = async () => {
    // 1. POST to /auth/refresh (refresh token sent via cookie automatically)
    const response = await apiClient.post<ApiResponse<{ accessToken: string }>>(
        '/auth/refresh'
    );

    // 2. Get a new access token
    const { accessToken } = response.data.data!;

    // 3. Update token in memory
    setAccessToken(accessToken);

    // 4. Return new token
    return accessToken;
};


// Logout function
export const logout = async () => {
    // 1. POST to /auth/logout (revokes refresh token)
    await apiClient.post('/auth/logout');

    // 2. Clear token from memory
    setAccessToken(null);
}